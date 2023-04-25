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

    equal.addEventListener("click", function(){
        calculate()
        prevDisplay.textContent = "";
        curDisplay.textContent = prevValue;
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

function calculate(){
    prevValue = Number(prevValue);
    curValue = Number(curValue);

    if(operator === "+"){
        prevValue += curValue;
    } else if(operator === "-"){
        prevValue -= curValue;
    } else if(operator === "*"){
        prevValue *= curValue;
    } else{
        prevValue /= curValue;
    }
    
    prevValue = roundNum(prevValue);
    prevValue = prevValue.toString();
    curValue = prevValue.toString();
}

function roundNum(num){
    return Math.round(num * 1000) / 1000;
}