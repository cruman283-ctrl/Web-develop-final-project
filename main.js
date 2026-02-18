const productContainer = document.getElementById('product-container');
const filterButtons = document.querySelectorAll('.filter-btn');
let allProducts = []; // To store data for filtering without re-fetching

// 1. Fetch data from API 
async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

// 2. Display products dynamically [cite: 28]
function displayProducts(products) {
    productContainer.innerHTML = products.map(product => `
        <div class="col">
            <div class="card h-100 p-3">
                <img src="${product.image}" class="card-img-top" alt="${product.title}" style="height: 200px; object-fit: contain;">
                <div class="card-body">
                    <h5 class="card-title text-truncate">${product.title}</h5>
                    <p class="card-text fw-bold">$${product.price}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-dark w-100">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 3. Category Filter Logic [cite: 63, 64]
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        
        if (category === 'all') {
            displayProducts(allProducts);
        } else {
            const filtered = allProducts.filter(p => p.category === category);
            displayProducts(filtered);
        }
    });
});


function displayProducts(products) {
    productContainer.innerHTML = products.map(product => `
        <div class="col">
            <div class="card h-100">
                <div class="card-img-container">
                    <img src="${product.image}" class="card-img-top" alt="${product.title}">
                </div>
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text fw-bold">$${product.price}</p>
                    <a href="product-detail.html?id=${product.id}" class="btn btn-dark w-100">View Details</a>
                </div>
            </div>
        </div>
    `).join('');
}











filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});







fetchProducts();



