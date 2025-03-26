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
var Person = /** @class */ (function () {
    function Person(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    Person.prototype.greet = function () {
        console.log("Hello, My Name is: ".concat(this.name, " and I'm ").concat(this.age, " years old."));
    };
    Object.defineProperty(Person.prototype, "Occupation", {
        get: function () {
            return this.occupation;
        },
        set: function (change) {
            this.occupation = change;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var hipster = new Person('ShakeAndBake', 24, 'SWE');
hipster.greet();
console.log(hipster.name);
console.log(hipster.Occupation, ' Current Occupation');
hipster.Occupation = 'Senior Software Engineer';
console.log(hipster.Occupation, ' Changed Occupation');
