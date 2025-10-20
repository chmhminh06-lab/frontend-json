const CART_KEY = 'cart_items';

function loadCart(){
  try{ const raw = localStorage.getItem(CART_KEY); return raw? JSON.parse(raw):[] }catch(_){ return [] }
}
function saveCart(cart){ localStorage.setItem(CART_KEY, JSON.stringify(cart)); }

function formatVND(n){ return Number(n||0).toLocaleString('vi-VN') + ' đ' }

// fallback: nếu item không có snapshot thì mới cần fetch để điền đủ thông tin
async function loadProducts(){
  try{
    const res = await fetch('https://my-json-server.typicode.com/chmhminh06-lab/backend-json/products');
    const data = await res.json();
    return Array.isArray(data)? data : (data?.products||[]);
  }catch(_){ return [] }
}

function renderCartCount(){
  const badge = document.getElementById('cart-count');
  if(!badge) return;
  const total = loadCart().reduce((s,i)=>s+(i.quantity||0),0);
  badge.textContent = String(total);
}

function normalizeImagePath(url){
  if(!url) return url;
  if(/^https?:\/\//i.test(url)) return url;
  const isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.pathname.includes('/asm1/frontend/');
  if(url.startsWith('/')) return url;
  if(url.startsWith('img/')) return (isLocal ? 'img/' : '/img/') + url.slice(4);
  return url;
}

async function renderCart(){
  const tbody = document.getElementById('cart-tbody');
  const totalEl = document.getElementById('cart-total');
  const cart = loadCart();
  // Nếu giỏ có snapshot, ưu tiên dùng snapshot; nếu thiếu, lấy từ API
  let products = [];
  if(cart.some(i=>!i.name || !i.price || !i.image)){
    products = await loadProducts();
  }
  const idToProduct = new Map(products.map(p=>[p.id, {...p, image: normalizeImagePath(p.image)}]));

  let total = 0;
  
  if (cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;padding:40px;color:#666;">
          <div style="font-size:18px;margin-bottom:10px;">🛒</div>
          <div style="font-size:16px;font-weight:600;margin-bottom:5px;">Giỏ hàng của bạn đang trống</div>
          <div style="font-size:14px;">Hãy thêm sản phẩm để tiếp tục mua sắm!</div>
          <a href="index.html" style="display:inline-block;margin-top:15px;padding:10px 20px;background:#ff6600;color:white;text-decoration:none;border-radius:6px;font-weight:600;">Tiếp tục mua sắm</a>
        </td>
      </tr>
    `;
    totalEl.textContent = formatVND(0);
    renderCartCount();
    return;
  }
  
  tbody.innerHTML = cart.map(item => {
    const snap = item;
    const apiP = idToProduct.get(item.productId);
    const p = {
      id: item.productId,
      name: snap.name || apiP?.name || `Sản phẩm ${item.productId}`,
      price: snap.price ?? apiP?.price ?? 0,
      image: normalizeImagePath(snap.image || apiP?.image || '/img/a.png'),
      brand: snap.brand || apiP?.brand || 'Apple',
      category: snap.category || apiP?.category || 'Sản phẩm'
    };
    if(!p) return '';
    const line = p.price * (item.quantity||0);
    total += line;
    return `
      <tr data-id="${p.id}">
        <td>
          <div style="display:flex;align-items:center;gap:15px;">
            <img src="${p.image}" alt="${p.name}" style="width:80px;height:80px;object-fit:cover;background:#fafafa;border:2px solid #e9ecef;border-radius:8px;box-shadow:0 2px 4px rgba(0,0,0,0.1);" />
            <div>
              <div style="font-weight:600;font-size:16px;color:#333;margin-bottom:4px;">${p.name}</div>
              <div style="font-size:12px;color:#666;margin-bottom:2px;">Thương hiệu: ${p.brand}</div>
              <div style="font-size:12px;color:#888;">Danh mục: ${p.category}</div>
              <div style="font-size:12px;color:#999;">ID: ${p.id}</div>
            </div>
          </div>
        </td>
        <td class="price">${formatVND(p.price)}</td>
        <td>
          <div class="qty">
            <button class="qty-dec" type="button">-</button>
            <input class="qty-input" type="number" min="1" value="${item.quantity||1}" />
            <button class="qty-inc" type="button">+</button>
          </div>
        </td>
        <td class="line-total">${formatVND(line)}</td>
        <td class="actions"><button class="remove" type="button">Xóa</button></td>
      </tr>
    `;
  }).join('');

  totalEl.textContent = formatVND(total);
  renderCartCount();
}

function updateQuantity(productId, quantity){
  const cart = loadCart();
  const idx = cart.findIndex(i=>i.productId===productId);
  if(idx<0) return;
  cart[idx].quantity = Math.max(1, Number(quantity)||1);
  saveCart(cart);
}

function removeItem(productId){
  let cart = loadCart();
  cart = cart.filter(i=>i.productId!==productId);
  saveCart(cart);
}

document.addEventListener('DOMContentLoaded', async () => {
  await renderCart();

  document.getElementById('cart-tbody').addEventListener('click', async (e)=>{
    const tr = e.target.closest('tr');
    if(!tr) return;
    const id = Number(tr.getAttribute('data-id'));
    if(e.target.classList.contains('qty-inc')){
      const input = tr.querySelector('.qty-input');
      input.value = Number(input.value||1)+1;
      updateQuantity(id, input.value);
      await renderCart();
    }
    if(e.target.classList.contains('qty-dec')){
      const input = tr.querySelector('.qty-input');
      input.value = Math.max(1, Number(input.value||1)-1);
      updateQuantity(id, input.value);
      await renderCart();
    }
    if(e.target.classList.contains('remove')){
      removeItem(id);
      await renderCart();
    }
  });

  document.getElementById('cart-tbody').addEventListener('change', async (e)=>{
    if(!e.target.classList.contains('qty-input')) return;
    const tr = e.target.closest('tr');
    const id = Number(tr.getAttribute('data-id'));
    updateQuantity(id, e.target.value);
    await renderCart();
  });

  const clearBtn = document.getElementById('clear-cart');
  if(clearBtn){
    clearBtn.addEventListener('click', async ()=>{
      localStorage.removeItem(CART_KEY);
      await renderCart();
    });
  }
});



