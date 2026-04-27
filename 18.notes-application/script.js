let notes = JSON.parse(localStorage.getItem("notes")) || [];

function addNote() {
    let input = document.getElementById("noteInput");

    if (input.value === "") return;

    notes.push(input.value);
    localStorage.setItem("notes", JSON.stringify(notes));

    input.value = "";
    showNotes();
}

function showNotes() {
    let list = document.getElementById("notesList");
    list.innerHTML = "";

    notes.forEach((n, i) => {
        list.innerHTML += `<li>${n} 
        <button onclick="deleteNote(${i})">X</button></li>`;
    });
}

function deleteNote(i) {
    notes.splice(i, 1);
    localStorage.setItem("notes", JSON.stringify(notes));
    showNotes();
}

showNotes();