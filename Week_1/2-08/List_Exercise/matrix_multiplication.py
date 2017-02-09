
matrix1 = [[1,7],[2,4]]
matrix2 = [[3,3],[5,2]]


matrix_addition = [[0,0],[0,0]]



matrix_addition[0][0] = matrix1[0][0]*matrix2[0][0]+matrix1[0][1]*matrix2[1][0]
matrix_addition[0][1] = matrix1[0][0]*matrix2[0][1]+matrix1[0][1]*matrix2[1][1]
matrix_addition[1][0] = matrix1[1][0]*matrix2[0][0]+matrix1[1][1]*matrix2[1][0]
matrix_addition[1][1] = matrix1[1][0]*matrix2[0][1]+matrix1[1][1]*matrix2[1][1]

print matrix1[0][0] #= 1
print matrix1[0][1] #= 7
print matrix1[1][0] #= 3
print matrix1[1][1] #= 3

print matrix_addition
