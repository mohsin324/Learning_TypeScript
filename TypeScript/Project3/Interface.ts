// interface > use to describe the shape of an object
interface Book {
    readonly isbn: number;
    title: string;
    author: string;
    genre?: string;
    // method
    printAuthor(): void;
    printTitle(message: string): string;
    printSomething: (someValue: number) => number;
}
const deepWork: Book = {
    isbn: 112,
    title: 'Deep Work',
    author: 'cal newport',
    genre: 'self-help',
    printAuthor(){
        console.log(`Author name is ${this.author} from inside method`);
    },
    printTitle(message){
        return `${this.title} ${message}`;
    },
    // option1
    // printSomething: function(someValue){
    //     return someValue
    // }
    // option2
    // printSomething: (someValue) => {
    //     console.log('hello world')
    //     return someValue
    // },
    // option3
    printSomething: (someValue) => {
        return someValue
    }
}
deepWork.printAuthor()
// console.log(, ' Author name ')
let result = deepWork.printTitle('is an awesome book.');
console.log(result);
// challenge
// interface Computer {
//     readonly id: number;
//     brand: string;
//     ram: string;
//     storage?: string;
//     upGradedRam(add: number): string;
// }
// const laptop: Computer = {
//     id: 1,
//     brand: 'HP',
//     ram: '8 GB',
//     upGradedRam(add){
//         return `Ram has been added to ${add} GB.`
//     }
// }
interface Computer {
        readonly id: number;
        brand: string;
        ram: number;
        storage?: number;
        upGradedRam(increase: number): number;
    }
    const laptop: Computer = {
        id: 1,
        brand: 'HP',
        ram: 8,
        upGradedRam(add){
            this.ram += add
            return this.ram
        }
    }
console.log(laptop.upGradedRam(1));
// merging interfaces
// how to expands interfaces
interface Person {
    name: string;
    age: number;
    getDetails(): void;
}
interface Employee extends Person {
    employeeID: number;
};
const Person: Employee = {
    name: "Mohsin Munir",
    age: 10,
    employeeID: 1128,
    getDetails(){
        console.log(`Person is ${this.name} and Age: ${this.age} Employee ID: ${this.employeeID}`);
    }
}
console.log('New Person ', Person)
// challenge
function getEmployee(): Person2 | DogOwner | Manager {
    console.log('inside get employee')
    let num: number = Math.random();
    console.log('Number: ', num)
    let employee: Person2 = { name: "Mohsin Munir" }
    let dogOwner: DogOwner = { dogName: 'Pitbull', name: "Mohsin"}
    let manager: Manager = { 
        name: "ManagerName",
        managePeople(){
            console.log('2 Person Managed')
        },
        delegateTask() {
            console.log('Tasks divided');
        }
    }
    console.log(manager, ' Tasks')
    let returnedValue = num <= 0.33 ? employee : num >= 0.33 && num <= 0.66 ? dogOwner : manager 
    console.log(returnedValue, ' Returned values ')
    return returnedValue
}

interface Person2 {
    name: string;
}
interface DogOwner extends Person2 {
    dogName: string;
}
interface Manager extends Person2 {
    managePeople(): void;
    delegateTask(): void;
}

/**
 * a type alias is way to give a name to a type. It can represent primitive types, union types, intersection types, tuples 
 * and any other types.
 * Interface > an interface is a way to define a contract for a certain structure of an object.
 * key Difference:
 * Type alias can represent primitive types, union types, intersection types, tuples etc. while interface are primarily 
 * used to represent the shape of an object.
 * Interfaces can be implemented by classes, while type aliases can't.
 * type aliases can use computed properties, while interfaces can't.
 * 
 * 
 */