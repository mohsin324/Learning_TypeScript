"use strict";
// type Human = {
//     name: string;
//     age: number
// }
// let Imran: Human = {
//     name: "Imaran",
//     age: 25
// }
// interface Human2 {
//     name: string;
//     age: number
// }
// let Imran2: Human2 = {
//     name: "Imaran",
//     age: 25,
//     occupation: "Software Engineer"
// }
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
// interface Human2 {
//     occupation: string
// }
// console.log(Imran)
// let name: string = "Mohsin Munir"
// console.log(name.toUpperCase());
// console.log(name.slice(-4));
var requestStatus = 'pending';
console.log(requestStatus);
// array's
// objects
// functions
function sayHi(name) {
    console.log(name);
    return " jk ";
}
var array = ["Imran", "Alex", "Alexander"];
function chkName(name) {
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var names = array_1[_i];
        if (names === name) {
            return true;
        }
    }
    return false;
}
var returnedValues = chkName('Alex');
console.log(returnedValues, ' returned values ');
// optional & default parameters
// rest parameters treated as array
function sum(message) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    var doubled = numbers.map(function (num) { return num * 2; });
    console.log("Doubled Values: ".concat(doubled));
    var total = numbers.reduce(function (acc, result) { return acc + result; });
    console.log("Total: ".concat(total));
    return "".concat(message, " ").concat(total);
}
sum('Calculate sum: ', 1, 2, 3, 4, 5);
// void function
function logMessage(message) {
    console.log(message);
}
logMessage('how to write void function');
var Employee = {
    id: 1,
    name: "Mohsin",
    department: "SWE"
};
var Manager = {
    id: 1,
    name: "Mohsin",
    employees: [Employee]
};
function printStaffDetails(staff) {
    if ("employees" in staff) {
        console.log("The person is a Manager and he is managed ".concat(staff.employees.length, " persons"));
    }
    else {
        console.log("The person is a Employee of department ".concat(staff.department));
    }
}
var Book = {
    id: 1,
    name: 'Learning TypeScript',
    price: 10,
    discount: 2
};
// computed property
var propName = 'age';
var tiger = (_a = {}, _a[propName] = 5, _a);
console.log(tiger);
