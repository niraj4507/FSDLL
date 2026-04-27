let skills = document.querySelectorAll(".skill");

skills.forEach(skill => {
    let name = skill.getAttribute("data-name");
    let percent = skill.getAttribute("data-percent");

    skill.innerHTML = `
        <div class="skill-name">${name}</div>
        <div class="bar">
            <div class="fill" style="width:${percent}%">
                ${percent}%
            </div>
        </div>
    `;
});
 