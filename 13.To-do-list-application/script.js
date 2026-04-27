function addTask() {
    let input = document.getElementById("taskInput");

    if (input.value == "") return;

    let li = document.createElement("li");
    li.innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "Delete";
    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(btn);
    document.getElementById("taskList").appendChild(li);

    input.value = "";
}