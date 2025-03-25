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

// interface Human2 {
//     occupation: string
// }

// console.log(Imran)
// let name: string = "Mohsin Munir"
// console.log(name.toUpperCase());
// console.log(name.slice(-4));

let requestStatus: 'pending' | 'success' | 'error' = 'pending'
console.log(requestStatus);
// array's
// objects
// functions

function sayHi(name: string) : string{
    console.log(name);
    return ` jk `
}

const array: string[] = ["Imran", "Alex", "Alexander"];
function chkName(name: string): boolean{
    for(const names of array){
        if(names === name){
            return true
        }
    }
    return false
}
let returnedValues: boolean = chkName('Alex')
console.log(returnedValues, ' returned values ');
// optional & default parameters
// rest parameters treated as array
function sum(message: string, ...numbers: number[]): string {
    const doubled = numbers.map((num) => num * 2);
    console.log(`Doubled Values: ${doubled}`);
    let total = numbers.reduce((acc, result) => acc + result);
    console.log(`Total: ${total}`);

    return `${message} ${total}`

}
sum('Calculate sum: ', 1,2,3,4,5);
// void function
function logMessage(message: string): void{
    console.log(message)
}
logMessage('how to write void function');
// objects as parameters in function
// type alias & interface
type Employee = {
    id: number;
    name: string;
    department: string
}
type Manager = {
    id: number;
    name: string;
    employees: Employee[]
}
let Employee: Employee = {
    id: 1,
    name: "Mohsin",
    department: "SWE"
}
let Manager: Manager = {
    id: 1,
    name: "Mohsin",
    employees: [Employee]
}
type Staff = Employee | Manager;

function printStaffDetails(staff: Staff): void {
    if("employees" in staff){
        console.log(`The person is a Manager and he is managed ${staff.employees.length} persons`)
    }else{
        console.log(`The person is a Employee of department ${staff.department}`)
    }
}
// printStaffDetails(Manager);
// intersection type
type Book = { id: number, name: string, price: number }
const Book: Book & {discount: number}= {
    id: 1,
    name: 'Learning TypeScript',
    price: 10,
    discount: 2
}
// computed property
const propName = 'age';
type Animal = {
    [propName]: number
}
let tiger: Animal = { [propName]: 5};
console.log(tiger)

export {}

