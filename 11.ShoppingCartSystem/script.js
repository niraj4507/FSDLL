let prices = [100,200];
let quantities = [1,1];

function changeQty(index, change) {
    let newQty = quantities[index] + change;

    if(newQty >= 1) {
        quantities[index] = newQty;
    }

    document.getElementById("qty" + index).innerText = quantities[index];
    updateTotal();
}

function updateTotal() {
    let total = 0;

    for(let i=0; i<prices.length; i++) {
        total += prices[i] * quantities[i];
    }

    document.getElementById("total").innerText = total;
}

updateTotal();