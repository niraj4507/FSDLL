function filterTable() {
    let input = document.getElementById("search").value.toLowerCase();
        let rows = document.querySelectorAll("#tagTable tr");

        rows.forEach((row, index) => {
            if (index===0) return;
            let text=row.innerText.toLowerCase();
            row.style.display = text.includes(input) ? "" : "none";
});
} 


 












