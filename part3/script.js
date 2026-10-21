let box = document.querySelector(".box")
let color = box.style.backgroundColor
box.addEventListener("mouseover", function(){
    box.style.backgroundColor="blue"
})

box.addEventListener("mouseout", function(){
    box.style.backgroundColor=color
})




let input = document.getElementById("input")
let result = document.getElementById("result")
input.addEventListener("keyup", function(){
    result.textContent = input.value
})


let x = document.getElementById("x")
let y = document.getElementById("y")
let operation = document.getElementById("operation")
let output = document.getElementById("output")
let button = document.getElementById("calculate")

button.addEventListener("click", function(){
    let xvalue = Number(x.value)
    let yvalue = Number(y.value)
    let operator = operation.value
    switch (operator){
        case "+":
            output.textContent = xvalue+yvalue;
            break;
        case "-":
            output.textContent = xvalue-yvalue;
            break;
        case "*":
            output.textContent = xvalue*yvalue;
            break;
        case "/":
            output.textContent = xvalue/yvalue;
            break;
        default:
            output.textContent = "enter a valid operator (+-*/)";
            break;

    }
})