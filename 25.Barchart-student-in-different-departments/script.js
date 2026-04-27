let bars = document.querySelectorAll(".bar");

bars.forEach(bar => {
    let value = bar.getAttribute("data-value");
    bar.style.height = value * 3 + "px"; // scale height
    bar.innerText = value;
});