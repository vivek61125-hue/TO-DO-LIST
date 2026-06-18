function addTask() {
    let taskInput = document.getElementById("taskInput");
    let priority = document.getElementById("priority");
    let taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Enter a task");
        return;
    }

    let li = document.createElement("li");

    if (priority.value === "High") {
        li.classList.add("high");
    } else if (priority.value === "Medium") {
        li.classList.add("medium");
    } else {
        li.classList.add("low");
    }

    li.innerHTML = `
        <span>${taskInput.value}</span>
        <div>
            <button onclick="this.parentElement.parentElement.classList.toggle('done')">✓</button>
            <button class="delete" onclick="this.parentElement.parentElement.remove()">X</button>
        </div>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}