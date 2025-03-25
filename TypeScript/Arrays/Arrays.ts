console.log('Arrays')
let imranNames: () => string [];
imranNames = () => ["Imran", "Alexander"];
let functionArray: (() => string)[];
functionArray = [() => "Imran", () => "Alexander"];
// array union type
let imranData: (string | number)[];
imranData = ["Imran", 1]

// always rest parameters in the function
let nickNames: string[] = ["Alex"];
function logNames(greeting: string, ...nicknames: string[]){
    console.log(typeof nicknames + ' nickNmaes ', nicknames)
    for(const nickname of nicknames ){
        console.log(`${greeting} Mr. ${nickname}`);
    }
}
logNames('Hello', ...nickNames);
// spread operator converts array into single line string
// tuples > works like an array but it has fixed number of elements with pre defined types
let imranDataTuple: [number, string];
imranDataTuple = [70, "Alexander"];
// below example will not works as it has different order than it's assigning
// imranDataTuple = ["Alex", 14]
