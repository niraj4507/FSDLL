function updatePrices() {
    let toggle = document.getElementById("toggle").checked;
    let prices = document.querySelectorAll(".price");

    prices.forEach(p => {
        let value = toggle ? p.dataset.year : p.dataset.month;
        p.innerText = "$" + value; 
    });
}