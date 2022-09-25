let taskNameInput = document.querySelector("#task-name-input");
let addTaskButton = document.querySelector("#add-task-btn");
let startMessage = document.querySelector("#start-message");
let taskList = document.querySelector(".task-list");
addTaskButton.addEventListener("click", addTaskHandler);
taskNameInput.addEventListener("keydown", function (e) {
    if (e.code == "Enter") addTaskHandler();
});
taskList.addEventListener("click", changeTaskState);
let showAllButton = document.querySelector("#show-all-btn");
let showCompletedButton = document.querySelector("#show-completed-btn");
let showUncompletedButton = document.querySelector("#show-uncompleted-btn");

showAllButton.addEventListener("click", showAll);
showCompletedButton.addEventListener("click", showCompleted);
showUncompletedButton = document.querySelector("click", showUncompleted);

let tasks = [];




function createTask(text) {
    let div = document.createElement("div");
    div.classList.add("task");

    let input = document.createElement("input");
    input.classList.add("check");
    input.type = "checkbox";

    let p = document.createElement("p");
    p.innerText = text;

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("delete");
    btnDelete.innerHTML = `<img src="../img/backet.png" alt="delete basket">`;
    btnDelete.addEventListener("click", () => {
        btnDelete.parentElement.remove()
    });


    div.append(input);
    div.append(p);
    div.append(btnDelete);

    return div;
}

function changeTaskState(e) {
    // Если событие пришло не от checkbox - игнорируем его
    if (e.target.nodeName != "input" && e.target.type != "checkbox") {
        return;
    }

    if (e.target.checked) {
        e.target.parentElement.classList.add("completed");
    } else {
        e.target.parentElement.classList.remove("completed");
    }
}

function addTaskHandler() {
    if (taskNameInput.value) {
        if (!startMessage.hidden) startMessage.hidden = true;

        let newTask = createTask(taskNameInput.value);
        taskList.append(newTask);
        taskNameInput.value = "";
    } else {
        alert("введите имя задачи");
    }
}

function showAll(){

    }
function showCompleted(){

}

function showUncompleted(){

}
