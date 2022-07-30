// // const r = 10;
// // const c= 10;
// // const a = new Array(r).fill(new Array(c).fill(-1));
// //
// //
// //
// // const fillSquareMatrix = (size) => {
// //     return Array(size)
// //         .fill()
// //         .map((u,y) => Array(size)
// //             .fill()
// //             .map((u,x) => y * size + x + 1));
// // };
// //
// // console.log(fillSquareMatrix(3));
//
// // var matrix = [];
// // for(var i=0; i<10; i++) {
// //     matrix[i] = new Array(9);
// // }
// //
// // console.log(matrix.valueOf())
//
//
// // Function to update and print the matrix
// // after performing queries
// function updateMatrix(n, q, mat) {
//     let i, j;
//     for (i = 0; i < q.length; i++) {
//         let X1 = q[i][0];
//         let Y1 = q[i][1];
//         let X2 = q[i][2];
//         let Y2 = q[i][3];
//
//         // Add 1 to the first element of the sub-matrix
//         mat[X1][Y1]++;
//
//         // If there is an element after the last element
//         // of the sub-matrix then decrement it by 1
//         if (Y2 + 1 < n)
//             mat[X2][Y2 + 1]--;
//         else if (X2 + 1 < n)
//             mat[X2 + 1][0]--;
//     }
//
//     // Calculate the running sum
//     let sum = 0;
//     for (i = 0; i < n; i++) {
//         for (j = 0; j < n; j++) {
//             sum += mat[i][j];
//
//             // Print the updated element
//             document.write(sum + " ");
//         }
//
//         // Next line
//         document.write("</br>");
//     }
// }
//
// // Size of the matrix
// let n = 10;
//
// let col = 10
// let row = 10
//
// let mat = Array.from(Array(col), () => new Array(row).fill(0));
// // () => this.numberMatrix(this.id)
//
// counter = -1;
// while (counter < mat.length) {
//     for (let i = 0; i < n; i++) {
//
//         for (let j = 0; j < n; j++) {
//             mat[i][j] = counter;
//             counter++;
//         }
//     }
// }
//
//
//
// console.log(mat.valueOf())
//
// // Queries
// let q = [[0, 0, 1, 2],
//     [1, 2, 3, 4],
//     [1, 4, 3, 4]];
//
// updateMatrix(n, q, mat);
// // updateMatrix(n, q, mat);
// // updateMatrix(n, q, mat);
//
//


// Size of the matrix
let n = 10;

let col = 10
let row = 10

let mat = Array.from(Array(col), () => new Array(row).fill(0));



function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
mat = range(0, mat.length); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
console.log(result);




function range(start, end) {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
var result = range(9, 18); // [9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
console.log(result);



let studentsData = [['Jack', 24], ['Sara', 23],];

for (let i of studentsData) {
    for (let j of i) {
        console.log(j);
    }
}
