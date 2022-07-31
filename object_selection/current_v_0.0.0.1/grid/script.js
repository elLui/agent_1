// screen matrix rows and columns
const columns = 10;
const rows = 10;

// ?? the following functions build a 2d array / aka matrix
// ## loop version - replaced by following
// const screen_matrix = new Array(columns);
// for (let i = 0; i < screen_matrix.length; i++) {
//     screen_matrix[i] = new Array(rows);
// }
// console.log(screen_matrix)

// @@ current
let screen_matrix = Array.from(Array(columns), () => new Array(rows).fill('X', 0, 99));








// console.log(screen_matrix.valueOf());


// !! BELOW IS FOR HISTORICAL REFERENCE ONLY :: CONSTRUCTION :: DEBUG
// ?? WORKING CONFIG 07.29.22.10:45
//
// // function createArray(length) {
// //     var arr = new Array(length || 0),
// //         i = length;
// //
// //     if (arguments.length > 1) {
// //         var args = Array.prototype.slice.call(arguments, 1);
// //         while(i--) arr[length-1 - i] = createArray.apply(this, args);
// //     }
// //
// //     return arr;
// // }
// //
// // let screen_matrix = createArray(10, 10);
// //
// // console.log(screen_matrix.valueOf().valueOf())
// //
// // console.log(screen_matrix[5][5])
//
//
//
//
// // const columns = 10;
// // const rows = 10;
// // let block_count = columns * rows;
// //
// // console.log(block_count)
// //
// // let screen_array = Array.from(Array(100).keys())
// //
// // for (let i = 0; i < 10; i++) {
// //
// // }
// //
// //
// // let screen_matrix = []
// //
// //
// //
// //
// // for (let i = 0; i < 10; i++) {
// //
// //
// //     if (screen_array.length !== 100 && screen_array%10 === 0) {
// //         screen_matrix.push(block_count);
// //         block_count--;
// //
// //     }
// //
// // }
//
//
//
// let screen_array = Array.from(Array(100).keys());
// let columns = 10;
// let rows = 10;
// let volume = columns * rows;
// let block_count = columns * rows;
//
//
// let screen_matrix = [];
//
// const slicer = (star) => {
//     return arr.slice(0,9)
// }
//
//
//
// // for (let i = 0; i < block_count)
//
//
//
//
//










