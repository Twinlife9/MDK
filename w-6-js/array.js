// let in1 = 1;
// let in2 = 3;
// let start = in1 + 1;
// let end = in2 - 1;

// let sum = ((end * (end + 1)) - (start * (start - 1))) / 2;

// console.log(sum);
/*
  Массив - разновиднось объекта
  преднозначеная для хранения
  пронумерованых значений и 
  предлагает доп методы 
  манипуляции над ними

  let a = [];
  let a = [1,5,7,8]

  a[0] -> 1
  alert(a);
  a[0] = 3
  a.lenght -> 4
  a.unshift(2); добовление в начало
  a.shift(); выкинуть перпый
  a.push(2) add last
  a.pop() del last
  a.indexOf(offset, 5) -> 1
  a.remove(5)
  a.splice(start 3, count 1)
  delete a[0] -> typeof a undefined
  a = [[3,5],[5,3],[6,2]] -- 2d array
  a[1][2]

  task: arr.lenhth -- 7 
  type int
  every a[] % 2 a[]**i
  else i**a[] 
    

  Old way using nested loop
  
  for (let x = 0; x < b.length; x++) {
    for (let y = 0; y < b[x].length; y++) {
      if (x == y) {
        main_sum += b[x][y];
      }
      if (b.length - 1 - x ==  y) {
        sub_sum += b[x][y]
      }
    }
  }
*/

let a = [1, 2, 3, 4, 5, 6, 7]

for (let i = 0; i < a.length; i++) {

  if (a[i] % 2 == 0) {
    a[i] = Math.pow(a[i], i)
  } else {
    a[i] = Math.pow(i, a[i]);
  }
}

console.log(a);

let b = [
  [1, 1, 2],
  [2, 1, 2],
  [2, 3, 1]
];
let main_sum = 0;
let sub_sum = 0;
for(let i = 0; i < b.length; i++){
  main_sum += b[i][i];
  let invertedI = ((b.length -1 ) - x);
  sub_sum += b[invertedI][I];
}

console.log(main_sum, sub_sum);
