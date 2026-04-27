function updateProfile() {
    let name = document.getElementById("name").value;
    let bio = document.getElementById("bio").value;
    let img = document.getElementById("img").value;

    document.getElementById("previewName").innerText = name || " Your Name";
    document.getElementById("previewBio").innerText = bio || " Your Bio";
    document.getElementById("previewImg").src = img || "https://via.placeholder.com/100"
}