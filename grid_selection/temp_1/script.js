


item_3_inner_text = document.querySelector(".container");

// document.querySelector(".container").children.item(0)

document.querySelector(".container").children.item(1)
document.querySelector(".container").children.item(2)



console.log(item_3_inner_text)





























// js.object.templates
// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language.toUpperCase();

    }
};
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang



// general object with integrated function example
function Person(firstName, lastName, age, eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
        this.lastName = name;
    };
}



// The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person(first, last, age, eye_color) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eye_color = eye_color;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;



// adding an iterator to an object requries the Symbol.iterator -
// if not included you will not be able to use the for...of statement -
// Create an Object
myNumbers = {};
// Make it Iterable
myNumbers[Symbol.iterator] = function() {
    let n = 0;
    done = false;
    return {
        next() {
            n += 10;
            if (n == 100) {done = true}
            return {value:n, done:done};
        }
    };
}
for (const num of myNumbers) {
    // Any Code Here
    console.log(num)
}