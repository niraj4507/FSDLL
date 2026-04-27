let list = document.getElementById("list");

list.addEventListener("dragstart", e => {
    e.target.classList.add("dragging");
});

list.addEventListener("dragend", e => {
    e.target.classList.remove("dragging");
});

list.addEventListener("dragover", e => {
    e.preventDefault();

    const dragging = document.querySelector(".dragging");
    const after = [...list.children].find(li => {
        const box = li.getBoundingClientRect();
        return e.clientY < box.top + box.height / 2;
    });

    list.insertBefore(dragging, after || null);
});