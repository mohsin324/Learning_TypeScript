// const url = `https://www.course-api.com/react-tours-project`;
// type Tour = {
//     id: string;
//     name: string;
//     infor: string;
//     image: string;
//     price: string;
//     something: boolean; 
// }
// // async
// async function fetchData(url: string) {
//     try{
//         const response = await fetch(url);
//         console.log(response);
//         console.log("================================")
//         if(!response.ok){
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data: Tour[] = await response.json();
//         // const data = await response.json();
//         // console.log(data, ' New Data ');
//         return data

//     }catch(err){
//         const errorMessage = err instanceof Error ? err?.message : 'there was an error...';
//         console.log(errorMessage);
//         return [];
//     }
// }

// const tours = fetchData(url);
// console.log(tours, ' tours ')
// tours.map((tou) => { 
//     console.log(tou);
// });

interface IPerson {
    name: string;
    age: number;

    greet(): void;
}

class Person implements IPerson {
    public name: string;
    public age: number;
    private occupation: string;
    constructor (name: string, age: number, occupation: string){
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    greet(): void {
        console.log(`Hello, My Name is: ${this.name} and I'm ${this.age} years old.`)
    }
    public get Occupation(){
        return this.occupation
    }
    public set Occupation(change: string){
        this.occupation = change;
    }
}
const hipster = new Person('ShakeAndBake', 24, 'SWE');
hipster.greet();
console.log(hipster.name)
console.log(hipster.Occupation, ' Current Occupation');
hipster.Occupation = 'Senior Software Engineer';
console.log(hipster.Occupation, ' Changed Occupation')




