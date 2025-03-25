// // tuples
// let person: [string, number] = ['John', 25];
// person.push(100);
// person.push('100');
// // person.push(true);
// console.log(person, ' Person');

// // enums > allows us to set of names constants
// enum ServerResponseStatus {
//     Success = 200,
//     Error = 500
// }
// interface ServerResponse {
//     result: ServerResponseStatus;
//     data: string[]
// }
// console.log(ServerResponseStatus);

// enum UserRole {
//     ADMIN = 'Admin',
//     MANAGER = 'Admin',
//     EMPLOYEE = 'Admin',
// }
// type User = {
//     id: number;
//     name: string;
//     role: UserRole;
//     contact: [string, string];
// }
// function createUser(user: User): User {
//     return user
// }

// const user: User = createUser({ id: 1, name: 'John Doe', role: UserRole.ADMIN, contact: ['abc@gmail.com', '123-456-789'] });
// console.log(user);


// type assertion > is the just to tell typescript we know more about type than typescript

// let somevalue: any = 'this is a string';
// let strLength: number = (somevalue as string).length;
// type Bird =  {
//     name: string;
// }
// let birdsString = '{"name": "Eagle"}';
// let dogString = '{"name": "Poodle"}';

// let birdObject = JSON.parse(birdsString);
// let dogObject = JSON.parse(dogString);

// let bird = birdObject as Bird;
// let dog = dogObject as Bird;

// console.log(bird.name);
// console.log(dog.name);

// enum Status {
//     PENDING =  'Pending',
//     DECLINED = 'Declined'
// }

// type User = {
//     name: string;
//     status: string
// }

// unknown value
export enum Color {
    RED,
    GREEN,
    BLUE
}
export function getColorName(color: Color){
    switch(color){
        case Color.RED:
            return 'Red'
        case Color.GREEN:
            return 'Green'
        case Color.BLUE:
            return 'Blue'
        default:
            let unexpected: never = color;
            throw new Error(`Unexpected color value ${color}`);
    }
}
// console.log(getColorName(Color.BLUE));
// console.log(getColorName(Color.GREEN));
// console.log(getColorName(Color.RED));
// modules types
import newStudent, { sayHello, Student, person } from "./types";
sayHello('Mohsin Munir and Type Checking ')
export default {}