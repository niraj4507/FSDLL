let products = [
    {
        name: "Laptop",
        price: 50000,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "Phone",
        price: 20000,
        image: "https://via.placeholder.com/150"
    },
    {
        name: "HeadPhones",
        price: 4000,
        image: "https://via.placeholder.com/150"
    }
];

// display products 

let container = document.getElementById("products");

products.forEach(p => {
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src ="${p.image}">
        <h3>${p.name}</h3>
        <p>Price: Rs.${p.price}</p>
        <button onclick="buyNow('${p.name}')">Buy Now</button>
    `;
    container.appendChild(card);
});

function buyNow(productName) {
    alert(productName + " purchased!");
}