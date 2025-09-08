const PRODUCT_API_URL = "https://fakestoreapi.com/products";

const getProducts = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayProducts(data);
        console.log(data);
    } catch (error) {
        console.log("Error fetching products:", error);
    }
}

getProducts(PRODUCT_API_URL);


const productTag = document.querySelector(".product-main");

const displayProducts = (products) => {
    products.forEach((product) => {
        const {image, title, price} = product;
        const productWrapper = document.createElement("div");
        productWrapper.innerHTML = `
            <img src="${image}" alt="${title}">
            <p>title: ${title}</p>
            <p>price: &#8358;${price}</p>
        `;
        productWrapper.classList.add("products-men");
        productTag.appendChild(productWrapper);

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        productWrapper.appendChild(buyButton);

        const searchInput = document.getElementById("searchInput");
        const searchButton = document.getElementById("searchButton");
        searchButton.addEventListener("click", () => {
            const query = searchInput.value.toLowerCase();
            const filteredProducts = products.filter(product =>
                product.title.toLowerCase().includes(query)
            );
            productTag.innerHTML = "";
            displayProducts(filteredProducts);
    });
});
}

const homeButton = document.querySelector(".home");
    homeButton.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.reload();
});          