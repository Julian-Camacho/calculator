let operator = "";
let prevValue = "";
let curValue = "";

document.addEventListener("DOMContentLoaded", function(){
    let clear = document.querySelector("#clear");
    let equal = document.querySelector(".equals");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operator = document.querySelectorAll(".operator");

    // console.log(operator)
    
    let prevDisplay = document.querySelector(".previous");
    let curDisplay = document.querySelector(".current");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        curDisplay.textContent = curValue;
    }))

    operator.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        prevDisplay.textContent = prevValue + " " + op.textContent;
        curDisplay.textContent = curValue;
    }))

    clear.addEventListener("click", function(){
        prevValue = "";
        curValue = "";
        operator = "";
        prevDisplay.textContent = curValue;
        curDisplay.textContent = curValue;
    })
})

function handleNumber(num){
    if(curValue.length <= 5){
        curValue += num;
    }
}

function handleOperator(op){
    operator = op;
    prevValue = curValue;
    curValue = "";
}