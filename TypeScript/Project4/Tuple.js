"use strict";
// // tuples
// let person: [string, number] = ['John', 25];
// person.push(100);
// person.push('100');
// // person.push(true);
// console.log(person, ' Person');
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
exports.getColorName = getColorName;
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
var Color;
(function (Color) {
    Color[Color["RED"] = 0] = "RED";
    Color[Color["GREEN"] = 1] = "GREEN";
    Color[Color["BLUE"] = 2] = "BLUE";
})(Color || (exports.Color = Color = {}));
function getColorName(color) {
    switch (color) {
        case Color.RED:
            return 'Red';
        case Color.GREEN:
            return 'Green';
        case Color.BLUE:
            return 'Blue';
        default:
            var unexpected = color;
            throw new Error("Unexpected color value ".concat(color));
    }
}
// console.log(getColorName(Color.BLUE));
// console.log(getColorName(Color.GREEN));
// console.log(getColorName(Color.RED));
// modules types
var types_1 = require("./types");
(0, types_1.sayHello)('Mohsin Munir and Type Checking ');
exports.default = {};
