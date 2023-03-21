const displayEquation = document.querySelector(".equation")
const buttons = document.querySelector(".button-container")
const decimal = document.querySelector("#decimal")
const answerDisplay = document.querySelector(".answer")

// Mathematical functions
const add = function(num1,num2) {
	return  +num1 + +num2;
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

let answer = null;
const operate = function(num1,num2,operator){
    if (operator == " + "){
       answer = add(num1,num2)
    }else if (operator == " - "){
        answer = subtract(num1,num2)
    }else if (operator == " × "){
        answer = multiply(num1,num2)
    }else if (operator == " / "){
        answer = divide(num1,num2)
    }
    console.log(answer)
    answerDisplay.textContent = answer;
    return answer;
}

//Displays number and operator on the screen
// work in progress

let operator = "";
let number = "";
let previousNum = "";
let num = [];
buttons.onclick = function(){
    let button = event.target.closest(".button") //enter numbers
    if (button.classList.contains("number"))
    {   
        num.push(button.textContent)
        number = num.join("");


    }else if (button.id == "decimal"){   //prevents number from having 2 decimals
        var result = number.includes(".");
        if (result){
            return;}  
        num.push(button.textContent)
        number = num.join("");
    } 

    else if (button.classList.contains("operator")) //enter operators
    {   
        operator = button.textContent;
        num.push(operator);
        previousNum = number;
        number = "";
        num = [];
        
    }else if (button.classList.contains("all-clear")){  //clears all on calculator
        allClear();

    }else if (button.classList.contains("backspace")){ // deletes on in calculator (not working right now)
        backSpace()

    }else if (button.id == "Github"){
        window.open("https://github.com/HoudRiz", "_blank");    
    }else if (button.id == "equal"){
        operate(previousNum,number,operator)
    }   
    displayEquation.textContent = `${previousNum} ${operator} ${number}` 
    
    console.log (operator)
    console.log(number)
    console.log(previousNum)
}

const allClear = function(){
    operator = "";
    number = "";
    previousNum = "";
    num = [];
    displayEquation.textContent = "";
    answerDisplay.textContent = "";
}
const backSpace = function(){
    num.pop();
    number = number.substring(0,number.length-1);
    displayEquation.textContent = number;

}