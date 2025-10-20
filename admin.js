const STORAGE_KEY = 'products_custom';

const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

function loadCustomProducts() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch (_) {
        return null;
    }
}

function saveCustomProducts(products) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
}

async function loadDefaultProducts() {
    const res = await fetch('db.json');
    const data = await res.json();
    return data.products || [];
}

function nextId(products) {
    const maxId = products.reduce((m, p) => Math.max(m, Number(p.id) || 0), 0);
    return maxId + 1;
}

function renderTable(products) {
    const tbody = qs('#product-table-body');
    tbody.innerHTML = products.map(p => `
        <tr>
            <td style="padding:8px;border-bottom:1px solid #eee;">${p.id}</td>
            <td style="padding:8px;border-bottom:1px solid #eee;">
                <img src="${p.image}" alt="${p.name}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;border:2px solid #e9ecef;" 
                     onerror="this.src='img/a.png'" />
            </td>
            <td style="padding:8px;border-bottom:1px solid #eee;">
                <div style="font-weight:600;color:#333;margin-bottom:4px;">${p.name}</div>
                <div style="font-size:12px;color:#666;">${p.brand || 'Apple'}</div>
                <div style="font-size:12px;color:#888;">${p.description || 'Chưa có mô tả'}</div>
            </td>
            <td style="padding:8px;border-bottom:1px solid #eee;">
                <div style="font-size:18px;font-weight:700;color:#e30000;">${Number(p.price).toLocaleString('vi-VN')} đ</div>
                <div style="font-size:12px;color:#28a745;">Đánh giá: ${p.rating || '4.5'} ⭐</div>
            </td>
            <td style="padding:8px;border-bottom:1px solid #eee;">
                <span style="background:#f8f9fa;padding:4px 8px;border-radius:4px;font-size:12px;color:#495057;">${p.category}</span>
            </td>
            <td style="padding:8px;border-bottom:1px solid #eee;">
                <span style="background:${p.hot ? '#dc3545' : '#6c757d'};color:white;padding:4px 8px;border-radius:4px;font-size:12px;">
                    ${p.hot ? 'HOT' : 'Bình thường'}
                </span>
            </td>
            <td style="padding:8px;border-bottom:1px solid #eee;display:flex;gap:6px;">
                <button data-action="edit" data-id="${p.id}" style="background:#007bff;color:white;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;font-size:12px;">Sửa</button>
                <button data-action="delete" data-id="${p.id}" style="background:#dc3545;color:white;border:none;padding:6px 12px;border-radius:4px;cursor:pointer;font-size:12px;">Xóa</button>
            </td>
        </tr>
    `).join('');
}

function readForm() {
    return {
        id: qs('#product-id').value ? Number(qs('#product-id').value) : undefined,
        name: qs('#product-name').value.trim(),
        price: Number(qs('#product-price').value || 0),
        image: qs('#product-image').value.trim(),
        brand: qs('#product-brand').value.trim(),
        category: qs('#product-category').value,
        rating: Number(qs('#product-rating').value || 4.5),
        hot: qs('#product-hot').checked,
        description: qs('#product-description').value.trim()
    };
}

function fillForm(p) {
    qs('#product-id').value = p?.id ?? '';
    qs('#product-name').value = p?.name ?? '';
    qs('#product-price').value = p?.price ?? '';
    qs('#product-image').value = p?.image ?? '';
    qs('#product-brand').value = p?.brand ?? 'Apple';
    qs('#product-rating').value = p?.rating ?? 4.5;
    const nameSpan = qs('#product-image-name');
    if (nameSpan) nameSpan.textContent = p?.image ? 'Đã có ảnh' : 'Chưa chọn ảnh';
    const preview = qs('#product-image-preview');
    if (preview) {
        if (p?.image) {
            preview.src = p.image;
            preview.style.display = 'block';
        } else {
            preview.removeAttribute('src');
            preview.style.display = 'none';
        }
    }
    qs('#product-category').value = p?.category ?? 'điện thoại';
    qs('#product-hot').checked = !!p?.hot;
    qs('#product-description').value = p?.description ?? '';
}

function resetForm() {
    fillForm({});
}

async function bootstrap() {
    let products = loadCustomProducts();
    if (!products) {
        products = await loadDefaultProducts();
    }
    renderTable(products);

    // File input handlers
    const fileInput = qs('#product-image-file');
    const hiddenInput = qs('#product-image');
    const nameSpan = qs('#product-image-name');
    const preview = qs('#product-image-preview');
    if (fileInput) {
        fileInput.addEventListener('change', async (e) => {
            const file = e.target.files && e.target.files[0];
            if (!file) return;
            
            // Validate file type
            if (!file.type.startsWith('image/')) {
                alert('Vui lòng chọn file ảnh hợp lệ!');
                return;
            }
            
            // Validate file size (max 5MB)
            if (file.size > 5 * 1024 * 1024) {
                alert('File ảnh quá lớn! Vui lòng chọn file nhỏ hơn 5MB.');
                return;
            }
            
            nameSpan.textContent = file.name;
            const reader = new FileReader();
            reader.onload = () => {
                hiddenInput.value = reader.result;
                preview.src = reader.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(file);
        });
    }

    qs('#product-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = readForm();

        if (!formData.name || !formData.category) {
            alert('Vui lòng điền đầy đủ thông tin bắt buộc!');
            return;
        }
        
        // image can be URL or data URL; optional fallback to placeholder
        if (!formData.image) {
            formData.image = 'img/a.png';
        }
        if (formData.price < 0) {
            alert('Giá sản phẩm không được âm!');
            return;
        }

        const existingIndex = products.findIndex(p => p.id === formData.id);
        if (existingIndex >= 0) {
            products[existingIndex] = { ...products[existingIndex], ...formData };
            alert('Cập nhật sản phẩm thành công!');
        } else {
            const id = nextId(products);
            products.push({ ...formData, id });
            alert('Thêm sản phẩm mới thành công!');
        }
        saveCustomProducts(products);
        renderTable(products);
        resetForm();
    });

    qs('#reset-btn').addEventListener('click', () => {
        resetForm();
    });

    qs('#seed-btn').addEventListener('click', async () => {
        if (confirm('Bạn có chắc muốn nạp lại dữ liệu mặc định? Điều này sẽ ghi đè dữ liệu hiện tại.')) {
            const def = await loadDefaultProducts();
            products = def;
            saveCustomProducts(products);
            renderTable(products);
            resetForm();
            alert('Đã nạp dữ liệu mặc định thành công!');
        }
    });

    qs('#clear-btn').addEventListener('click', () => {
        if (confirm('Bạn có chắc muốn xóa toàn bộ dữ liệu tùy chỉnh? Điều này không thể hoàn tác.')) {
            localStorage.removeItem(STORAGE_KEY);
            // Reload to reflect original db.json on homepage
            window.location.reload();
        }
    });

    qs('#product-table-body').addEventListener('click', (e) => {
        const btn = e.target.closest('button');
        if (!btn) return;
        const id = Number(btn.dataset.id);
        const action = btn.dataset.action;
        const idx = products.findIndex(p => p.id === id);
        if (idx < 0) return;

        if (action === 'edit') {
            fillForm(products[idx]);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        if (action === 'delete') {
            if (confirm(`Bạn có chắc muốn xóa sản phẩm "${products[idx].name}"?`)) {
                products.splice(idx, 1);
                saveCustomProducts(products);
                renderTable(products);
                alert('Xóa sản phẩm thành công!');
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', bootstrap);
