let firstNumber;
let secondNumbers;
let operation;
let sum;
let result;
console.log(firstNumber,operation,secondNumbers);
function clickHandlerNumbers(input){
    if(operation === undefined){
        if(firstNumber === undefined){
            firstNumber = String(input);
        }
        else{
            firstNumber = String(firstNumber) + String(input);
        }
    }
    else{
        if(secondNumbers === undefined){
            secondNumbers = String(input);
        }
        else{
            secondNumbers = String(secondNumbers) + String(input);
        }
    }
    document.getElementById("textBox").innerHTML = (firstNumber,operation,secondNumbers);
    console.log(firstNumber,operation,secondNumbers);   
}
function clickHandlerOperators(input){
    switch(input){
        case '+': {
            operation = '+';
            break;
        }
        case '-':{
            operation = '-';
            break;
        }
        case '*':{
            operation = '*';
            break;
        }
        case '/':{
            operation = '/';
            break;
        }
        case '=':{
            if(operation == '+'){
                sum = Number(firstNumber) + Number(secondNumbers);
            }
            else if(operation == '-'){
                sum = Number(firstNumber) - Number(secondNumbers);
            }
            else if(operation == '*'){
                sum = Number(firstNumber) * Number(secondNumbers);
            }
            else if(operation == '/'){
                sum = Number(firstNumber) / Number(secondNumbers);
            }
            console.log(sum);
            firstNumber = undefined;
            secondNumbers = undefined;
            operation = undefined;
            break;
        }
        default:{
            console.log("unknown"+ input);
        }
    }
    document.getElementById("textBox").innerHTML = Number(firstNumber,operation,secondNumbers);
    console.log(firstNumber,operation,secondNumbers);
}