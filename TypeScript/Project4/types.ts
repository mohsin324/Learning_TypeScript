// export function sayHello(name: string): void{
//     console.log(`Hello ${name}`)
// }
// export let person: string = 'Mohsin Munir';
// export type Student = {
//     name: string;
//     age: number;
// }
// const newStudent: Student = {
//     name: "Peter",
//     age: 24
// }
// import { getColorName, Color } from "./Tuple";
// getColorName(Color.BLUE);
// console.log(getColorName(Color.BLUE));

// export default newStudent;

// typeof guards

// type Student = {
//     name: string;
//     study: () => void;
//     // method
//     institute(name: string): string;
// }
// type User = {
//     name: string;
//     login: () => void;
// }
// type Person = Student | User;
// const randomPerson = (): Person => {
//     return Math.random() > .5 ?
//         { name: "John", study: () => console.log('Studying...'), institute() { return 'Hello' } }
//         : { name: "mary", login: () => console.log('Logging in') }
// }
// console.log(randomPerson())

// function sayHello(name: string) : object[]  {
//     return [{name: name}]
// }
// console.log(sayHello('Mohisn Munir'))
