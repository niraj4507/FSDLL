function filterProducts(cat) {
    let items = document.querySelectorAll(".item");

    for (let i = 0; i < items.length; i++) {
        if (cat === "all" || items[i].dataset.cat === cat) {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
}