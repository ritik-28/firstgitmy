"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const numEl1 = document.getElementById("num1");
const numEl2 = document.getElementById("num2");
const buttonEl = document.querySelector("button");
//ignore null case after adding tsconfig.json fils using tsc --init command
// function add(num1: number, num2: number) {
// function add(num1: any, num2: any) {
//   return num1 + num2;
// }
// console.log(add(1, 5));
// console.log(add("1", "5"));
// if(buttonEl){
//we can write a new function whih expect specific one only
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + num2;
    }
    else {
        return +num1 + +num2;
    }
}
function printResult(resulObj) {
    console.log(resulObj);
}
buttonEl.addEventListener("click", () => {
    const num1 = numEl1.value;
    const num2 = numEl2.value;
    const result = add(+num1, +num2);
    const stringResult = add(num1, num2);
    // const boolResult = add(true, false); //not good
    console.log(result);
});
// }
const result = 10;
printResult({ val: result, timestamp: new Date() });
