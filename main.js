let matrix1 = [
    [1, 2, 1],
    [4, 5, 1],
    [4, 5, 1]
]

let matrix2 = [
    [7, 8, 3],
    [9, 11, 4],
    [1, 21, 12]
]

console.log(matrix1);
console.log(matrix2);

let matrix3 = [];
let mat_el = [];
for (j = 0; j < matrix1.length; j++) {
    for (i = 0; i < matrix1[j].length; i++) {
        let mat1_el = matrix1[j][i];
        let mat2_el = matrix2[i][j];
        console.log(mat1_el + mat2_el);
        mat_el.push(mat1_el + mat2_el);
    }
    matrix3.push(mat_el);
    mat_el = [];
}


console.log(matrix3);