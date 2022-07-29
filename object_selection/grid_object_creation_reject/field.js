'use strict';

let vertical_array = new Array(10);
let horizontal_array = new Array(10);

let current_field = Array(10)

export default class Field {
    constructor(field_columns, field_rows) {
        this.field_columns = field_columns;
        this.field_rows = field_rows;

        this.volume_remaining = this.volume;
        this.current_field = Array(field_columns).map(()=> Array(field_rows).fill(0))

        // this.grid_area = function matrix_field(field_columns, field_rows) {
        //     let result = [];
        //     for (let i = 0; i < field_rows; i++) {
        //         result.push((new Array(field_columns).fill(0)))
        //     }
        //     return result;
        // }
    }

    // getters

    get volume() {
        return this.field_area()
    }

    get volume_remaining() {
        // TODO :: complete this function
        return this.volume;
    }







    // functions
    field_area() {
        return this.field_columns * this.field_rows
    }

    // field_container_area () {
    //     return (this.bottom_row - this.top_row) * (this.right_column - this.left_column)
    // }


}