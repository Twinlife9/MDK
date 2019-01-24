  
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

for(let i = 0; i < matrix.length; i++){
  //main diagonal
  main_sum += matrix[i][i];

  //Invering index for minor(counter) diagonal
  //  and adding up
  let invertedI = ((b.length -1 ) - x);
  sub_sum += b[invertedI][I];
}

console.log(main_sum, minor_sum);
