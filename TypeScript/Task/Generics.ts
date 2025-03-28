const score: number[] = [2,22];
console.log(score);
const array: Array<number> = [1,2,3];

// Generics > it takes whatever is too pass and return the same value

function identityOne(val: number | boolean): boolean | number {
    return val
}
// any 
function identityTwo(val: any): any {
    return val
}
// Generics type
function identityThree <Type> (val: Type, age: number): Type {
    return val
}
identityThree("Mohsin Munir", 8);

function identityFour <Type> (val: Type): Type {
    return val
}
identityFour("Mohsin Munir");
identityFour(true);
function identityFive <T> (val: T): T {
    return val
}
identityFive("Mohsin Munir");

interface Bottle {
    brand: string;
    type: number;
}

function identitySix<Bottle>(bottle: Bottle): Bottle{
    return bottle
}
const arrowFunction = <T> (products: Array<T>): T => {
    return products[0]
}

// interfaces
interface Quiz {
    name: string;
    type: string;
}
interface Course {
    name: string;
    author: string;
    subject: string;
}
class Syllabus<Type>{
    public cart: Type[] = [];
    addToCart (product: Type){
        this.cart.push(product);
    }
}

// Narrowing
function detectType(val: number | string){
    // what if val is array of number?
    if(typeof val === 'string'){
        return val.toUpperCase()
    }
    return val + 3
}
function provideID(id: string|null): void{
    if(!id){
        console.log(`please provide id`)
        return 
    }
    id.toLocaleLowerCase()
}
interface User{
    name: string;
    email: string;
}
interface Admin{
    name: string;
    email: string;
    isAdmin: boolean;
}
function isAdmin(account: User|Admin): void{
    if("isAdmin" in account){
        console.log(`The Person is Admin`);
    }else{
        console.log('The Person is User')
    }
}