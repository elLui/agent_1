'use strict';
export default class FieldContainer {
    constructor(left_column, right_column, top_row, bottom_row, background_color) {

        this.left_column = left_column;
        this.right_column = right_column;
        this.top_row = top_row;
        this.bottom_row = bottom_row;
        this.background_color = background_color;

    }

    field_container_area () {
        return (this.bottom_row - this.top_row) * (this.right_column - this.left_column)
    }
}




