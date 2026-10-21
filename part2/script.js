let paragraph = document.querySelector("p")
let button = document.querySelector("button")

button.addEventListener("click", function(){
    paragraph.textContent="Task 2 was completed"
})



let container1 = document.querySelector(".text-container")
let textButton = container1.querySelector("button")
let text = container1.querySelector("p")


textButton.addEventListener("click", function(){
    text.style.fontSize = "24px";
})


let container2 = document.querySelector(".color-container")
let colorButton = container2.querySelector("button")
colorButton.addEventListener("click", function(){
    container2.style.backgroundColor ="#a5b4fc"
})


let listContainer = document.querySelector(".list-container")
let list = listContainer.querySelector("ul")
let addButton = listContainer.querySelector(".adder")
let removeButton = listContainer.querySelector(".remover")

let count = 1

addButton.addEventListener("click", function(){
    let item = document.createElement("li")
    item.textContent = "item "+count
    list.appendChild(item)
    count++
})

removeButton.addEventListener("click", function(){
    if (list.lastElementChild){
        list.lastElementChild.remove()
        count--
    }    
})