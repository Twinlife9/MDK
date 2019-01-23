/*let a = 0;
let condition = a < 5;

while (condition) {
  //Code goes here...  
  a++;
}

do {
  //Code goes here...
  a++;
} while (condition);

for (let i = 0; i < 10; i++) {
  console.log(i);
}*/

//  Task:
//  2 int find summ of numbers % 3 in beetween thees 2 ints
//

let in1 = 30;
let in2 = -6;

let start = 0;
let end = 0;

if (in1 > in2) {
  start = in2;
  end = in1;
} else {
  start = in1;
  end = in2;
}

let summ = 0;
for (let i = start; i < end; i++) {
  if (i % 3 == 0) {
    summ += i;
  }
}

console.log(summ);
