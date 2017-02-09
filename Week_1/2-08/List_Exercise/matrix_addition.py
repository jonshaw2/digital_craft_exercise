import javascript

matrix1 = [[1,2,3],[4,5,6],[7,8,9]]
matrix2 = [[3,4,5],[6,8,8],[2,2,2]]

matrix1_dimen = len(matrix1)
matrix1_sub_dimen = len(matrix1[0])
matrix_addition = matrix1

for i in range(matrix1_dimen):
    for j in range(matrix1_sub_dimen):
        matrix_addition[i][j] = matrix1[i][j] + matrix2[i][j]

print matrix_addition
console.log(matrix_addition);
