let a = 155;

function perevod(num, base) {
  let str = '';
  for (let b = num; b > 0; b = Math.floor(b / base)) {
    if (b % base > 9) {
      str += String.fromCharCode(55 + b % base);
    } else {
      str += b % base;
    }
  }
    return str.split("").reverse().join("");
}

console.log(perevod(a, 16));
