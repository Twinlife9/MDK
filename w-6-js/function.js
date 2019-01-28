let a = 9;

function perevod(num) {
  let str = '';
  for (let b = num; b > 0; b = Math.floor(b/2)) {
    str += b % 2;
  }
  return str;
}

console.log(perevod(a));
