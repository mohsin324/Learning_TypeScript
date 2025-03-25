function hello(name, lastName) {
    if (lastName === void 0) { lastName = 'Munir'; }
    console.log("Hello ".concat(name, " ").concat(lastName));
}
hello("Mohsin");
function userName(name, aka) {
    console.log("Hello ".concat(name, " aka ").concat(aka));
}
userName("Mohsin");
// rest parameters
// it's only in array, because it's in collection and it's the last one in the parametes
// implicit return types means typescript return's itself types
function nickName(name) {
    var nickNames = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        nickNames[_i - 1] = arguments[_i];
    }
    console.log("hello: ".concat(name, " aka ").concat(nickNames));
}
nickName("Imran", "Alexander", "Alex", "Alex the Great");
// explicit return types in functions
// function as an expression
// callback function
var nickNames = ["Imran", "Alexander", "Alex", "Alex the Great"];
function allNickNames(callback) {
    for (var i = 0; i < nickNames.length; i++) {
        console.log(callback(i));
    }
}
function getNameAt(index) {
    return "".concat(nickNames[index]);
}
allNickNames(getNameAt);
// arrow functions, below function either return function with string return type of number
var returnStringOrNumber;
returnStringOrNumber = 7;
returnStringOrNumber = function () { return "Mohsin Munir"; };
// parameter type inference
// let imran : (name: string) => string;
// imran = (name) => `Hello ${name.toUpperCase()}`;
// console.log(imran);
var imran = function (name) {
    return "this is ".concat(name);
};
function createDate(dayOrTimeStamp, month, year) {
    return month === undefined || year === undefined ? new Date(dayOrTimeStamp) : new Date(year, month, dayOrTimeStamp);
}
