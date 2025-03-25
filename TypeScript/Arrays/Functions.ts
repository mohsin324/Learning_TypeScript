function hello(name: string, lastName = 'Munir'){
    console.log(`Hello ${name} ${lastName}`)
}
hello("Mohsin");

function userName(name: string, aka?: string){
    console.log(`Hello ${name} aka ${aka}`)
}
userName("Mohsin");
// rest parameters
// it's only in array, because it's in collection and it's the last one in the parametes
// implicit return types means typescript return's itself types
function nickName(name: string, ...nickNames: string[]){
    console.log(`hello: ${name} aka ${nickNames}`);
}
nickName("Imran", "Alexander", "Alex", "Alex the Great");
// explicit return types in functions
// function as an expression
// callback function
const nickNames: string[] = ["Imran", "Alexander", "Alex", "Alex the Great"];

function allNickNames(callback: (index: number) => string){
    for(let i = 0; i < nickNames.length; i++){
        console.log(callback(i));
    }
}
function getNameAt(index: number){
    return `${nickNames[index]}`;
}

allNickNames(getNameAt);
// arrow functions, below function either return function with string return type of number
let returnStringOrNumber: (() =>  string) | number
returnStringOrNumber = 7
returnStringOrNumber = () => "Mohsin Munir";
// parameter type inference
// let imran : (name: string) => string;
// imran = (name) => `Hello ${name.toUpperCase()}`;
// console.log(imran);
const imran = (name: string): string => {
    return `this is ${name}`
}
// function overloading => different function with same name
function createDate(timestamp: number): Date;
function createDate(day: number, month: number, year: number) : Date;
function createDate(dayOrTimeStamp: number, month?: number, year?: number){
    return month === undefined || year === undefined ? new Date(dayOrTimeStamp) : new Date(year, month, dayOrTimeStamp);
}
export {}
