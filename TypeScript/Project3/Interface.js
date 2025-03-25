var deepWork = {
    isbn: 112,
    title: 'Deep Work',
    author: 'cal newport',
    genre: 'self-help',
    printAuthor: function () {
        console.log("Author name is ".concat(this.author, " from inside method"));
    },
    printTitle: function (message) {
        return "".concat(this.title, " ").concat(message);
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
    printSomething: function (someValue) {
        return someValue;
    }
};
deepWork.printAuthor();
// console.log(, ' Author name ')
var result = deepWork.printTitle('is an awesome book.');
console.log(result);
var laptop = {
    id: 1,
    brand: 'HP',
    ram: 8,
    upGradedRam: function (add) {
        this.ram += add;
        return this.ram;
    }
};
console.log(laptop.upGradedRam(1));
;
var Person = {
    name: "Mohsin Munir",
    age: 10,
    employeeID: 1128,
    getDetails: function () {
        console.log("Person is ".concat(this.name, " and Age: ").concat(this.age, " Employee ID: ").concat(this.employeeID));
    }
};
console.log('New Person ', Person);
function getEmployee() {
    console.log('inside get employee');
    var num = Math.random();
    console.log('Number: ', num);
    var employee = { name: "Mohsin Munir" };
    var dogOwner = { dogName: 'Pitbull', name: "Mohsin" };
    var manager = {
        name: "ManagerName",
        managePeople: function () {
            console.log('2 Person Managed');
        },
        delegateTask: function () {
            console.log('Tasks divided');
        }
    };
    console.log(manager, ' Tasks');
    var returnedValue = num <= 0.33 ? employee : num >= 0.33 && num <= 0.66 ? dogOwner : manager;
    console.log(returnedValue, ' Returned values ');
    return returnedValue;
}
getEmployee();
