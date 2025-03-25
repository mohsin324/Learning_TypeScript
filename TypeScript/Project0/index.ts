console.log("Hello world");
// explicitly
type MohsinType = {
    name: { firstName: string; lastName: string},
    age: number,
    teaching: boolean,
    dob: Date,
    certification: string[]
}
let Mohsin: MohsinType = {
    name: { firstName: 'Mohsin', lastName: 'Munir'},
    age: 26,
    teaching: false,
    dob: new Date(),
    certification: ["AWS", "Genesys"]
}

console.log(Mohsin);
// type checker
type FirstName = { firstName: string }
type LastName = { lastName: string}
const fullName = { firstName: "Mohisn", lastName: "Munir"}
let firstName: FirstName = fullName
let lastName: LastName = fullName

console.log(firstName);
// Access property checker
type Alexander = { name: string; age: number}
let alex: Alexander = { age: 26, name: "Mohsin Munir"}
console.log(alex);
// nested object type
type Author = {
    firstName: string;
    lastName: string;
}
type Book = {
    author: Author;
    name: string;
    // optional property
    pages?: number;
}
const book: Book = {
    author: {
        firstName: 'Niccolo',
        lastName: 'Machiavelli'
    },
    name: "The Prince"
}
// union of types
type PoemWithPages = { name: string; pages: number;};
type PoemWithRhymes = { name: string; rhymes: boolean;};
type Poem = PoemWithPages | PoemWithRhymes;
const poem: Poem = 
    Math.random() * 100 > 0.5 ? { name: "The Double Image", pages: 7} : { name: "Her Kind", rhymes: true};

// narrowing object type
if("pages" in poem){
    console.log("Total Number of Pages: "+ poem.name);
}else{
    console.log("The Rhymes: "+poem.rhymes);
}
