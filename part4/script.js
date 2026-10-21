let addButton = document.getElementById("add")
let inputTitle = document.getElementById("title")
let inputDescription = document.getElementById("description")
let tasksContainer = document.querySelector(".tasks")



let tasks = []

addButton.addEventListener("click",function(){
    let title = inputTitle.value
    let description = inputDescription.value
    if (title.trim() === "") {
        alert("Please enter a task title")
        return
    }
    let task = {
        title: title,
        description: description,
        completed: false
    }
    tasks.push(task)
    createElements(title, description, task)
    inputTitle.value = ""
    inputDescription.value = ""
})

let createElements = function(title, description, task){
    let div = document.createElement("div")
    let h1 = document.createElement("h1")
    let p = document.createElement("p")
    let button1 = document.createElement("button")
    let button2 = document.createElement("button")

    div.className = "task"
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(button1);
    div.appendChild(button2);

    tasksContainer.appendChild(div)

    h1.textContent = title
    p.textContent = description
    button1.className = "delete"
    button2.className = "finish"
    button1.textContent = "Delete"
    button2.textContent = "Finish"


    button1.addEventListener("click", function() {
        let index = tasks.indexOf(task)
        tasks.splice(index, 1)
        div.remove()
        console.log(tasks)
    })

    button2.addEventListener("click", function() {
        task.completed = !task.completed
        div.classList.toggle("completed")
        console.log(tasks)
        button2.textContent = task.completed ? "Unfinish" : "Finish"
    })
}




