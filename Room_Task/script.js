const tasks = [];

const form = document.getElementById("taskForm");
const tbody = document.querySelector("#taskTable tbody");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const task = {
        taskId: document.getElementById("taskId").value,
        title: document.getElementById("title").value,
        assignedDeveloper: document.getElementById("developer").value,
        priority: document.getElementById("priority").value,
        estimatedHours: document.getElementById("hours").value,
        status: document.getElementById("status").value
    };

    tasks.push(task);

    displayTasks();

    form.reset();

});

function displayTasks() {

    tbody.innerHTML = "";

    tasks.forEach(task => {

        tbody.innerHTML += `
            <tr>
                <td>${task.taskId}</td>
                <td>${task.title}</td>
                <td>${task.assignedDeveloper}</td>
                <td>${task.priority}</td>
                <td>${task.estimatedHours}</td>
                <td>${task.status}</td>
            </tr>
        `;

    });

}