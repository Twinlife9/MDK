//
//  Task: Given an array that contains 7 integers.
//       For every even number cell value equals
//       to number to the power of index, for 
//       ever odd nuber cell value equals to
//       index to the power of number.
//
let a = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < a.length; i++) {
  if (a[i] % 2 == 0) {
    a[i] = Math.pow(a[i], i)
  } else {
    a[i] = Math.pow(i, a[i]);
  }
}

console.log(a);


//
//  Task: Given a matrix of undefined size.
//       Find summ of main diagonal
//       and summ of minor diagonal
//

let matrix = [
  [1, 1, 2],
  [2, 1, 2],
  [2, 3, 1]
];

let main_sum = 0;
let minor_sum = 0;

for (let i = 0; i < (matrix[0].length > matrix.length ? matrix[0].length : matrix.length); i++) {
  //main diagonal
  main_sum += matrix[i][i];

  //Invering index for minor(counter) diagonal
  //  and adding up
  let invertedI = ((matrix.length - 1) - i);
  minor_sum += matrix[invertedI][i];
}

console.log(main_sum, minor_sum);
let up_trig = [
  [1, 1, 2, 3, 1],
  [0, 1, 2, 3, 1],
  [0, 0, 1, 4, 6],
  [0, 1, 0, 4, 6],
  [0, 0, 0, 0, 6]
];

let bot_trig = [
  [1, 0, 0, 0, 0],
  [2, 1, 0, 0, 0],
  [2, 3, 1, 0, 0],
  [1, 3, 1, 4, 0],
  [2, 3, 1, 4, 6]
];

let diag = [
  [1, 0, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 4, 0],
  [0, 0, 0, 0, 6]
];

let cMatrix = up_trig;
let isUpper = true
let isBot = true;
let isDiag = true;

for (let i = 1; i < cMatrix.length - 1; i++) {
  if (!(cMatrix[i - 1][i] == 0 && cMatrix[i + 1][i] != 0 )) {
    isBot = false;
  }
  if(!(cMatrix[i+1][i] == 0 && cMatrix[i-1][i] != 0))
  {
    isUpper = false
  }
  if(!(cMatrix[i+1][i] == 0 && cMatrix[i-1][i] == 0)){
    isDiag = false;
  }
  
}

console.log(`Is upper ${isUpper}, Is bottom ${isBot}, Is diag ${isDiag}`);
