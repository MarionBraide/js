let numOne = Number(prompt("Enter the first number"));
let numTwo = Number(prompt("Enter the second number"));
let operation = prompt("Please choose an operation: +, -, *, /, % ");

let result;

if (operation === "+") {
    result = numOne + numTwo;
} else if (operation === "-") {
    result = numOne - numTwo;
} else if (operation === "*") {
    result = numOne * numTwo;
} else if (operation === "/") {
    result = numOne / numTwo;
} else if(operation === "%") {
    result = numOne % numTwo;
} else {
    result = "This is not a valid operation";
}

console.log("The result is : " + result);
