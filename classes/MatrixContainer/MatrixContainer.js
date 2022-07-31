let col = 10;
let row = 10;
let counter = 99;


class MatrixContainer {
    matrix = [];

    // const
    constructor(col, row) {
        this.col = col;
        this.row = row;
        this.volume = col * row;
        this.matrix = Array.from(Array(col), () => new Array(row).fill( false, 1, 99));

        this.column_top = 0;
        this.column_bottom = 11;
    }
}
// screen_matrix = Array.from(Array(col), () => new Array(row));

// ** following is for testing only
const screen_matrix = new MatrixContainer(col, row);
console.table(screen_matrix.matrix)



