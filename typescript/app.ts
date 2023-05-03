import { timeStamp } from "console";
import { toASCII } from "punycode";

const numEl1 = document.getElementById("num1") as HTMLInputElement;
const numEl2 = document.getElementById("num2") as HTMLInputElement;
const buttonEl = document.querySelector("button")!;
//ignore null case after adding tsconfig.json fils using tsc --init command

// function add(num1: number, num2: number) {
// function add(num1: any, num2: any) {
//   return num1 + num2;
// }

// console.log(add(1, 5));
// console.log(add("1", "5"));
// if(buttonEl){

//we can write a new function whih expect specific one only
function add(num1: number | string, num2: number | string) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else if (typeof num1 === "string" && typeof num2 === "string") {
    return num1 + num2;
  } else {
    return +num1 + +num2;
  }
}

//for objects
function printResult(resulObj: { val: number; timestamp: Date }) {
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
const stringResult = "ritik";
printResult({ val: result, timestamp: new Date() });

/* working with alias and interfaces 
type numOr String = number | string;
//now you can use it
add(num1:numOrString, num2: numOrString)

//also you can use interfacers
*/

//for arrays

// const numResults: number[]  = [];
// const textResults: string[] = [];

//for arrays generic
const numResults: Array<number> = [];
const textResults: Array<string>;
numResults.push(result);
textResults.push(stringResult);

//for promise
const myPromises = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked");
  }, 1000);
});

myPromises.then((result) => {
  console.log(result);
});

//generic promise
const myPromises = new Promise<string>((resolve, reject) => {
  setTimeout(() => {
    resolve("it worked");
  }, 1000);
});
