'use strict';



let icolumns = 10;
let irows = 10;

const Container = function (columns, rows) {

    this.columns = columns;
    this.rows = rows;


    // !! NEVER DO THIS !! OR YOU DIE !!
    // !!==========================================
    // !! this.container_square_area = function () {
    // !!    return icolumns * irows;
    // !!
    // !! }
}
// !! if you create your functions inside your object instantiation every instance of every object will have a copy of
// !! every function with it - using this prototypal inheritance method allows us to access these functions without
// !! having to carry a copy of the functions as a payload !!

Container.prototype.container_area = function () {
// ?? this is the proper way to create add a function to a 'class'
    return irows * icolumns
// ?? a .prototype is a prototype of linked objects - extending inheritance
}
const initial_position = new Container('repeat(auto-fill, minmax(10vw, 1fr))', 'repeat(10, 1fr)');

console.log("rows === " + initial_position.rows + "\ncolumns === " + initial_position.columns + "\ncontainer_square_area === " + initial_position.container_area());

// 1. new object created ( {} === object )
// 2. function is called = {}
// 3. {} linked to prototype!
// 4. function automatically returns a {}
icolumns = 10;
irows = 10;



// ?? the following is the least used way to implement objects
// ?? alternative object creation
// ?? create a custom prototype of an object -
// ?? then call the created prototype with Object.create() this sets a prototype of an object -
const Positiion_1_Proto = {
    container_area_2 () {
        irows * icolumns
    }
}
// ?? here we create a new object with our custom prototype template
const positionTwo = Object.create(Positiion_1_Proto);
console.log(positionTwo)
positionTwo.name = 'position 2';

console.log(positionTwo.name)
// ?? this can also be used to modify prototypes


//  the above code can be reproduced and placed into a function - example ::

const PersonObjectCreatorFunctionProto = {
    container_area() {
        irows * icolumns;
    },
    init(columns, rows) {
        this.columns = columns;
        this.rows = rows;
    }
}