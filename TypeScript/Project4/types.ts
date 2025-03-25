export function sayHello(name: string): void{
    console.log(`Hello ${name}`)
}
export let person: string = 'Mohsin Munir';
export type Student = {
    name: string;
    age: number;
}
const newStudent: Student = {
    name: "Peter",
    age: 24
}
import { getColorName, Color } from "./Tuple";
getColorName(Color.BLUE);
console.log(getColorName(Color.BLUE));

export default newStudent;