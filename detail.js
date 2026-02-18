// 1. Get the Product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

const detailContainer = document.getElementById('detail-container');

async function fetchProductDetail() {
    if (!productId) {
        detailContainer.innerHTML = "<h2>Product not found.</h2>";
        return;
    }

    try {
        // Fetch specific product by ID
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const product = await response.json();

        renderDetails(product);
    } catch (error) {
        console.error("Error fetching product details:", error);
        detailContainer.innerHTML = "<p>Error loading product. Please try again later.</p>";
    }
}

// 2. Display the specific product details [cite: 36-42]
function renderDetails(product) {
    detailContainer.innerHTML = `
        <div class="col-md-6 text-center">
            <img src="${product.image}" alt="${product.title}" class="img-fluid" style="max-height: 500px;">
        </div>
        <div class="col-md-6">
            <span class="badge bg-secondary mb-2">${product.category.toUpperCase()}</span>
            <h1 class="display-5 fw-bold">${product.title}</h1>
            <h3 class="text-primary my-3">$${product.price}</h3>
            <p class="lead">${product.description}</p>
            <button class="btn btn-dark btn-lg mt-3">Add to Cart</button>
        </div>
    `;
}

fetchProductDetail();