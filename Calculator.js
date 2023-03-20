const displayEquation = document.querySelector(".equation")
const buttons = document.querySelector(".button-container")
const decimal = document.querySelector("#decimal")

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
// work in progress
let operator = "";
let number = 0;
let num = [];
buttons.onclick = function(){
    let button = event.target.closest(".button")
    if (button.classList.contains("number"))
    {   
        num.push(button.textContent)
        number = num.join("");
        var result = (number - Math.floor(number)) !== 0; 
   
        if (result){
            console.log('Number has a decimal place.');
           
        }
        displayEquation.textContent = number;
    }else if (button.classList.contains("operator"))
    {   
        operator = button.textContent;
        num.push(operator);
        displayEquation.textContent = num.join("");
    }else if (button.classList.contains("all-clear")){
        allClear();
    }else if (button.classList.contains("backspace")){
        backSpace()
    }else if (button.id == "Github"){
        window.open("https://github.com/HoudRiz", "_blank");    }    

    
}

const allClear = function(){
    operator = "";
    number = 0;
    num = [];
    displayEquation.textContent = "";
}
const backSpace = function(){
    num.pop();
    number = number.substring(0,number.length-1);
    displayEquation.textContent = number;

}