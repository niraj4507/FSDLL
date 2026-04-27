function filterImages(category) {
    let images = document.querySelectorAll(".gallery img");

    images.forEach(img => {
        let imgCategory = img.getAttribute("data-category");

        if (category === "all" || imgCategory === category) {
            img.style.display = "block";
        } else {
            img.style.display = "none";
        }
    });
}