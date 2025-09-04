const PRODUCT_API_URL = "https://fakestoreapi.com/products";

// function fetchProducts() {
//   return fetch(PRODUCT_API_URL)
//     .then(response => response.json())
//     .catch(error => console.error("Error fetching products:", error));
// }

// const getProducts = (url) => {
//   return fetch(url)
//     .then((response) => (response.json()))
//     .then((data) => {
//       console.log("Fetched products:", data);
//       return data;
//     })
//     .catch((error) => console.log("Error fetching products:", error));
// };



// const displayProducts = (products) => {
//     const productContainer = document.getElementById("product-container");
//     productContainer.innerHTML = ""; // Clear existing content

//     products.forEach((product) => {
//         const productCard = document.createElement("div");
//         productCard.classList.add("product-card");

//         productCard.innerHTML = `
//             <img src="${product.image}" alt="${product.title}">
//             <h3>${product.title}</h3>
//             <p>Price: &#8358;${product.price}</p>
//         `;

//         productContainer.appendChild(productCard);
//     });
// };
// getProducts(PRODUCT_API_URL).then(displayProducts);
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
    });
}