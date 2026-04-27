window.onload = function () {
    let savedTheme = localStorage.getItem("theme") || "light";
    document.body.className = savedTheme;
};

function toggleTheme() {
    let current = document.body.className;
    let newTheme = current === "light" ? "dark" : "light";

    document.body.className = newTheme;
    localStorage.setItem("theme", newTheme);
}