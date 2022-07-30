// class Matrix {
//     constructor(cols, rows) {
//         this.cols = cols;
//         this.rows = rows;
//     }
//
//     // // Getter
//     // get volume() {
//     //     return this.volume();
//     // }
//
//     volume = () => this.cols * this.rows;
//
// }
//
// const matrix = new Matrix(10, 10);
// const arrayColumn = (arr, n) => {
//     arr.map((x) => x[n]);
// }
// console.log(arrayColumn(matrix, 0))
//
//
//
//
//
//
// const twoDimensionalArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ];
//
// console.log(arrayColumn(twoDimensionalArray, 0));
//
//
//
//
// console.log(square)
// console.log(square.volume())
//
//
//
// let columns = 10
// let rows = 10
// let volume = columns * rows
// let counter = columns * rows
//
//
// let screen_matrix = Array.from(Array(columns), () => new Array(rows).fill('X'));
//
//
// for (let i = 0; i < screen_matrix.length; i++) {
//     for (let i2 = 0; i2 < screen_matrix[i].length; i2++) {
//         screen_matrix[i][i2]
//
//     }
// }
columns = 11;
rows = 11;
class ScreenMatrix {

    constructor(col, row, id=0) {

        this.id = id;
        this.col = col;
        this.row = row;
        this.field = Array.from(Array(col), () => new Array(row), () => this.numberMatrix(this.id));


        this.matrix_length_volume = col * row;
    }










}

screen_matrix = new ScreenMatrix(columns, rows);
console.log(screen_matrix.matrix_length_volume)



console.table(screen_matrix)

// let screen_matrix = Array.from(Array(columns), () => new Array(rows).map(element =>  {element.id = id++;}));
// // let id = 1;
// // screen_matrix.map(elem => {elem.id = id++;});
//
//
// // screen_matrix.forEach((block, index) => screen_matrix.index = index + 1)
// console.log(screen_matrix)
//
// screen_matrix[0][0] = 0;
