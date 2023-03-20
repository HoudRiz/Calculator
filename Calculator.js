const displayEquation = document.querySelector(".equation")
const buttons = document.querySelector(".button-container")

// Mathematical functions
const add = function(num1,num2) {
	return  num1+ num2;
};
const subtract = function(num1,num2) {
	return num1- num2;
};
const multiply = function(num1,num2) {
	return num1* num2;
};
const divide = function(num1,num2) {
	return num1/ num2;
};


const operate = function(num1,num2,operator){
    if (operator == "+"){
        add(num1,num2)
    }else if (operator == "-"){
        subtract(num1,num2)
    }else if (operator == "×"){
        multiply(num1,num2)
    }else if (operator == "/"){
        divide(num1,num2)
    }
}

//Displays number and operator on the screen
let operator = "";
let number = 0;
let num = [];
buttons.onclick = function(){
    let button = event.target
    if (button.classList.contains("number"))
    {   
        num.push(button.textContent)
        number = num.join("");
        displayEquation.textContent = number;
    }else if (button.classList.contains("operator"))
    {   
        operator = button.textContent;
        num.push(operator);
        displayEquation.textContent = num.join("");
    }; 
    console.log (number)
    
}
