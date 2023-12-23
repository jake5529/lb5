let M = parseInt(prompt("Введите порядок матрицы: "));
let matrix = [];

for (let i = 0; i < M; i++) {
  let row = [];
  for (let j = 0; j < M; j++) {
    row.push(parseInt(prompt("Введите элемент матрицы: ")));
  }
  matrix.push(row);
}

for (let i = 0; i < M; i++) {
  for (let j = i + 1; j < M; j++) {
    if (j < M - 1 - i) {
      matrix[i][j] = 0;
    }
  }
}

console.log("Обновленная матрица:");
for (let i = 0; i < M; i++) {
  for (let j = 0; j < M; j++) {
    console.log(matrix[i][j] + " ");
  }
  console.log();
}