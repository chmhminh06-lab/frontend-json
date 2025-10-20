//class sản phẩm
class Product {
    constructor(id, name, price, image, category, hot, description) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.hot = hot;
        this.description = description;
    }
    
    // Cập nhật render() để thêm thẻ <a> trỏ đến trang chi tiết sản phẩm
    render() {
        let extraInfo = '';
        let priceOld = '';
        let tagsHtml = '';
        let currentPrice = this.price; // Giá mặc định
        const buttonsHtml = `
            <div class="product-actions">
                <button class="btn-add-cart" type="button">Thêm vào giỏ</button>
                <button class="btn-buy" type="button">MUA NGAY</button>
            </div>
        `;

        // --- Logic tùy chỉnh cho từng ID sản phẩm (Giữ nguyên, nhưng bọc trong thẻ <a>) ---

        // Tùy chỉnh chi tiết chỉ cho sản phẩm đầu tiên (id: 1) để giống hình mẫu
        if (this.id === 1) { // Iphone air
            const oldPrice = 31990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Ưu đãi lên đến 5,5 Triệu</p>
                    <p class="product-tragop">Trả góp 30: 0đ trả trước, 0 lãi, 0 phí</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Mẫu mới</span>
                <span class="product-tag tag-discount">↓ 7%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 29590000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return ` 
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }
        
        if (this.id === 2) { // Iphone 17
           
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Ưu đãi lên đến 5,5 Triệu</p>
                    <p class="product-tragop">Trả góp 30: 0đ trả trước, 0 lãi, 0 phí</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Mẫu mới</span>
                
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = this.price;
            

            // Kết quả hiển thị
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }
            
        if (this.id === 3) { // Iphone 16
            const oldPrice = 34990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới đến 2,5 Triệu</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 13%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 30390000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }
          
        if (this.id === 4) { // Iphone 15
            const oldPrice = 37990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới tặng ngay 500K</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 32%</span>
                <span class="product-tag tag-status">SẮP VỀ HÀNG</span>
            `;
            currentPrice = 25990000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 5) { // macbook m4
            const oldPrice = 39990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới đến 5 Triệu</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 6%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 37690000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }
        
        if (this.id === 6) { // macbook air m4
            const oldPrice = 31990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới đến 5 Triệu</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 3%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 30890000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 7) { // macbook air m2
            const oldPrice = 24990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới đến 5 Triệu</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 20%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 19890000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 8) { // mac mini m4
            const oldPrice = 14990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Thu cũ đổi mới đến 5 Triệu</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 7%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 13990000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 9) { // 11
             
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Tặng đến 244k</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                
                <span class="product-tag tag-status">HÀNG NEW</span>
            `;
            currentPrice = this.price;
            
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 10) { // 10
            const oldPrice = 11790000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Tặng đến 113k</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 4%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 11290000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 11) { // se
            const oldPrice = 7299000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Tặng Ngay 56k</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 9%</span>
                <span class="product-tag tag-status">SẴN HÀNG</span>
            `;
            currentPrice = 6590000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        if (this.id === 12) { // ultra
            const oldPrice = 22990000; 
            extraInfo = `
                <div class="product-detail-box">
                    <p class="product-uudai">Tặng ngay 217K</p>
                    <p class="product-tragop">Trả góp: Cam kết 0 lãi, 0 phát sinh</p>
                </div>
            `;
            tagsHtml = `
                <span class="product-tag tag-new">Trả góp 0%</span>
                <span class="product-tag tag-discount">↓ 6%</span>
                <span class="product-tag tag-status">HÀNG MỚI VỀ</span>
            `;
            currentPrice = 21690000; 
            priceOld = `<p class="old-price">${oldPrice.toLocaleString()} đ</p>`;
            return `
                <a href="product.html?id=${this.id}" class="product product-special">
                    <div class="tag-top">${tagsHtml.split('<span class="product-tag tag-status">SẴN HÀNG</span>')[0]}</div>
                    <img src="${this.image}" alt="${this.name}">
                    <span class="tag-status-absolute">${tagsHtml.split('<span class="product-tag tag-status">')[1].split('</span>')[0]}</span>
                    
                    <h4>${this.name}</h4>
                    <p class="product-price">${currentPrice.toLocaleString()} đ</p>
                    ${priceOld}
                    ${extraInfo}
                    ${buttonsHtml}
                </a>
            `;
        }

        // Render mặc định cho các sản phẩm khác
        return `
            <a href="product.html?id=${this.id}" class="product special-product">
                <img src="${this.image}" alt="${this.name}">
                <h4>${this.name}</h4>
                <p class="product-price">${this.price.toLocaleString()} đ</p>
                ${buttonsHtml}
            </a>
        `;
    }

}

// --- HÀM TẢI CHI TIẾT SẢN PHẨM ---
const loadProductDetails = (allProductsData) => {
    // Lấy ID sản phẩm từ URL (ví dụ: product.html?id=5)
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');

    if (!productId) {
        // Xử lý khi không có ID
        const detailPage = document.querySelector('.product-detail-page');
        if (detailPage) detailPage.innerHTML = '<h1>Lỗi: Không tìm thấy ID sản phẩm.</h1>';
        return; 
    }

    // Tìm sản phẩm trong mảng dữ liệu
    const product = allProductsData.find(p => p.id == productId);

    if (!product) {
        // Xử lý khi không tìm thấy sản phẩm
        const detailPage = document.querySelector('.product-detail-page');
        if (detailPage) detailPage.innerHTML = `<h1>Không tìm thấy sản phẩm có ID: ${productId}</h1>`;
        return; 
    }

    // Cập nhật Title trang
    document.title = `Chi tiết sản phẩm - ${product.name} | Hoàng Minh`;
    
    // Cập nhật Breadcrumb
    const breadcrumb = document.getElementById('product-breadcrumb');
    if (breadcrumb) {
        breadcrumb.innerHTML = `
            <a href="index.html">Trang chủ</a> &gt; 
            <a href="#">${product.category.charAt(0).toUpperCase() + product.category.slice(1)}</a> &gt; 
            ${product.name}
        `;
    }

    // Cập nhật các thông tin chính
    const productNameTitle = document.getElementById('product-name-title');
    if (productNameTitle) productNameTitle.textContent = product.name;

    const productNameDetails = document.getElementById('product-name-details');
    if (productNameDetails) productNameDetails.textContent = product.name;

    const mainImage = document.getElementById('product-main-image');
    if (mainImage) {
        mainImage.src = product.image;
        mainImage.alt = product.name;
    }

    const currentPriceElement = document.getElementById('product-price');
    if (currentPriceElement) {
        currentPriceElement.textContent = `${product.price.toLocaleString('vi-VN')} đ`;
    }

    // Cập nhật mô tả chi tiết (nếu có thẻ HTML này trong product.html)
    const descriptionDiv = document.getElementById('product-full-description');
    if (descriptionDiv) {
        descriptionDiv.innerHTML = `
            <h2>MÔ TẢ CHI TIẾT</h2>
            <p><strong>${product.name}</strong> là một sản phẩm mới thuộc danh mục <strong>${product.category}</strong>. 
            Sản phẩm có ID: ${product.id}.</p>
            <p class="base-description">${product.description || 'Sản phẩm này chưa có mô tả chi tiết.'}</p>
        `;
    }
}
// --- KẾT THÚC HÀM TẢI CHI TIẾT SẢN PHẨM ---

//show trang chủ
const productSpecial = document.getElementById('product-iphone-special'); // ID MỚI
const productNew = document.getElementById('product-new'); 
const productRobot = document.getElementById('product-robot'); 
let allProductsData = []; // Khai báo biến toàn cục để lưu trữ dữ liệu

// Ưu tiên dữ liệu tuỳ chỉnh từ localStorage nếu có
function getOverriddenProducts(baseProducts) {
    try {
        const raw = localStorage.getItem('products_custom');
        if (!raw) return baseProducts;
        const custom = JSON.parse(raw);
        if (Array.isArray(custom) && custom.length > 0) {
            return custom;
        }
        return baseProducts;
    } catch (_) {
        return baseProducts;
    }
}

const renderProduct = (array, theDiv) => {
    let html = "";
    array.forEach((item) => {
        const product = new Product(
            item.id,
            item.name,
            item.price,
            item.image,
            item.category,
            item.hot,
            item.description
        )
        html += product.render();
    })
    theDiv.innerHTML = html;
}

// Logic chính để tải dữ liệu và điều phối
fetch('https://my-json-server.typicode.com/chmhminh06-lab/backend-json/products')
    .then(response => response.json())
    .then(data => {
        // Hỗ trợ cả 2 kiểu: mảng trực tiếp hoặc { products: [...] }
        const base = Array.isArray(data) ? data : (data && Array.isArray(data.products) ? data.products : []);
        // Chuẩn hoá đường dẫn ảnh để chạy trên Vercel (ảnh trong /img)
        const normalizeImagePath = (url) => {
            if(!url) return url;
            if(/^https?:\/\//i.test(url)) return url; // đã là URL tuyệt đối
            if(url.startsWith('/')) return url; // đã là đường dẫn gốc
            if(url.startsWith('img/')) return '/img/' + url.slice(4);
            return url;
        };
        const normalized = base.map(p => ({ ...p, image: normalizeImagePath(p.image) }));
        allProductsData = getOverriddenProducts(normalized);
        console.log(allProductsData);
        
        // --- 1. Logic cho Trang Chủ (index.html) ---
        if (productSpecial) { 
            // 1. Khu vực iPhone (product-iphone-special)
            const dataIphoneSpecial = allProductsData.filter(p => p.category === "điện thoại");
            
            // 2. Khu vực Sản phẩm khác (product-new)
            const dataNew = allProductsData.filter(p => p.category === "laptop");
            
            // 3. Khu vực Phụ kiện (product-robot)
            const dataRobot = allProductsData.filter(p => p.category === "dh" && p.hot === false);
            
            //Show sản phẩm iPhone
            renderProduct(dataIphoneSpecial, productSpecial);
            //show sản phẩm mới nhất (laptop)
            renderProduct(dataNew, productNew); 
            //show sản phẩm robot (phụ kiện)
            renderProduct(dataRobot, productRobot);
        }

        // --- 2. Logic cho Trang Sản Phẩm (product-all-product) & Thanh Tìm Kiếm ---
        const productAll = document.getElementById('product-all-product');
        const searchInput = document.getElementById('search-input');
        const sortPrice = document.getElementById('sort-price');

        if (productAll) {
            renderProduct(allProductsData, productAll);
            
            if(searchInput){
                searchInput.addEventListener('input',(e)=>{
                    const keyword = e.target.value.toLowerCase();
                    const filteredProducts= allProductsData.filter(
                        p=>p.name.toLowerCase().includes(keyword));
                    renderProduct(filteredProducts,productAll );
                })  
            }
            if(sortPrice){
                sortPrice.addEventListener('change',(e)=>{
                    const sortedData = [...allProductsData]; // Tạo bản sao để sắp xếp
                    if(e.target.value==="asc"){
                        sortedData.sort((a,b)=>a.price-b.price);
                    } else if(e.target.value==='desc'){
                        sortedData.sort((a,b)=>b.price-a.price);
                    }
                    renderProduct(sortedData,productAll);
                })
            }
        }
        
        // --- 3. Logic cho Trang Chi Tiết Sản Phẩm (product.html) ---
        if (document.querySelector('.product-detail-page')) {
            loadProductDetails(allProductsData);
        }
    })
    .catch(error => console.error('Lỗi khi tải dữ liệu:', error));


// Xử lý Dropdown (Giữ nguyên)
const catBtn = document.querySelector('.category-btn');
const dropdown = document.querySelector('.dropdown');

if (catBtn) {
    catBtn.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });
}

// ---------------- GIỎ HÀNG (localStorage) ----------------
const CART_KEY = 'cart_items';

function loadCart(){
    try{
        const raw = localStorage.getItem(CART_KEY);
        return raw ? JSON.parse(raw) : [];
    }catch(_){
        return [];
    }
}

function saveCart(cart){
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

function getCartTotalQuantity(cart){
    return cart.reduce((sum,item)=>sum + (Number(item.quantity)||0), 0);
}

function renderCartCount(){
    const badge = document.getElementById('cart-count');
    if(!badge) return;
    const cart = loadCart();
    badge.textContent = String(getCartTotalQuantity(cart));
}

function addToCart(productId){
    const cart = loadCart();
    const idx = cart.findIndex(i=>i.productId===productId);
    if(idx>=0){
        cart[idx].quantity = (cart[idx].quantity||0)+1;
    }else{
        cart.push({productId, quantity:1});
    }
    saveCart(cart);
    renderCartCount();
}

// Khởi tạo badge số lượng khi tải trang
document.addEventListener('DOMContentLoaded', renderCartCount);

// Lắng nghe click nút "MUA NGAY" để thêm vào giỏ, không chuyển trang
document.addEventListener('click', (e)=>{
    const btnBuy = e.target.closest('.btn-buy');
    const btnAdd = e.target.closest('.btn-add-cart');
    if(!btnBuy && !btnAdd) return;
    e.preventDefault();
    // Tìm phần tử <a> bao quanh để đọc id từ URL product.html?id=xx
    const wrapperLink = (btnBuy||btnAdd).closest('a');
    let productId = null;
    if(wrapperLink && wrapperLink.href){
        try{
            const url = new URL(wrapperLink.href, window.location.origin);
            productId = Number(url.searchParams.get('id'));
        }catch(_){/* ignore */}
    }
    // Nếu không lấy được id, thử đoán bằng cách tìm thẻ h4 tên sản phẩm
    if(!productId && typeof allProductsData !== 'undefined'){
        const nameNode = (btnBuy||btnAdd).parentElement?.querySelector('h4');
        const nameText = nameNode ? nameNode.textContent?.trim() : '';
        const found = allProductsData.find(p=>p.name===nameText);
        if(found) productId = found.id;
    }
    if(!productId) return;
    addToCart(productId);
});
