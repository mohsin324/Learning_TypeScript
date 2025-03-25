console.log("Hello world");
var Mohsin = {
    name: { firstName: 'Mohsin', lastName: 'Munir' },
    age: 26,
    teaching: false,
    dob: new Date(),
    certification: ["AWS", "Genesys"]
};
console.log(Mohsin);
var fullName = { firstName: "Mohisn", lastName: "Munir" };
var firstName = fullName;
var lastName = fullName;
console.log(firstName);
var alex = { age: 26, name: "Mohsin Munir" };
console.log(alex);
var book = {
    author: {
        firstName: 'Niccolo',
        lastName: 'Machiavelli'
    },
    name: "The Prince"
};
var poem = Math.random() * 100 > 0.5 ? { name: "The Double Image", pages: 7 } : { name: "Her Kind", rhymes: true };
// narrowing object type
if ("pages" in poem) {
    console.log("Total Number of Pages: " + poem.name);
}
else {
    console.log("The Rhymes: " + poem.rhymes);
}
