let col = 10
let row = 10

class Create_Matrix {
    matrix = [];
    constructor (col, row) {
        this.col = col;
        this.row = row;
        this.volume = col * row;
        this.matrix = Array.from(Array(col), () => new Array(row));


        this.column_top = 0;
        this.column_bottom = 11;



    }
}

// screen_matrix = Array.from(Array(col), () => new Array(row));

// ** following is for testing only

const screen_matrix = new Create_Matrix(col, row);
// console.log(screen_matrix.valueOf())
//
// console.log(screen_matrix.col)
// console.log(screen_matrix.row)
// console.log(screen_matrix.volume)
console.log(screen_matrix.matrix)
