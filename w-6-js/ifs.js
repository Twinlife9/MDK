let numArray = [12, 43, 4, 34];

console.log(numArray);

let a, b, c, d;


//0 biggest
//3 smallest
if (numArray[0] > numArray[1] &&
  numArray[0] > numArray[2] &&
  numArray[0] > numArray[3] &&
  //split
  numArray[3] < numArray[0] &&
  numArray[3] < numArray[1] &&
  numArray[3] < numArray[2]) {
  a = numArray[0];
  d = numArray[3];
  //If second pair in middle
  if (numArray[1] > numArray[2]) {
    b = numArray[1];
    c = numArray[2]
  } else {
    b = numArray[2];
    c = numArray[1];
  }
}

//0 biggest
//1 smallest
if (numArray[0] > numArray[1] &&
  numArray[0] > numArray[2] &&
  numArray[0] > numArray[3] &&
  //split
  numArray[1] < numArray[0] &&
  numArray[1] < numArray[2] &&
  numArray[1] < numArray[3]) {
  a = numArray[0];
  d = numArray[1];
  //If third pair in middle
  if (numArray[2] > numArray[3]) {
    b = numArray[2];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[2];
  }
}
//0 biggest
//2 smallest
if (numArray[0] > numArray[1] &&
  numArray[0] > numArray[2] &&
  numArray[0] > numArray[3] &&
  //split
  numArray[2] < numArray[0] &&
  numArray[2] < numArray[1] &&
  numArray[2] < numArray[3]) {
  a = numArray[0];
  d = numArray[2];
  //If second and fourth are pair
  if (numArray[1] > numArray[3]) {
    b = numArray[1];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[1];
  }
}

//1 biggest
//0 smallest
if (numArray[1] > numArray[0] &&
  numArray[1] > numArray[2] &&
  numArray[1] > numArray[3] &&
  //split
  numArray[0] < numArray[1] &&
  numArray[0] < numArray[2] &&
  numArray[0] < numArray[3]) {
  a = numArray[1];
  d = numArray[0];
  //If third pair in middle
  if (numArray[2] > numArray[3]) {
    b = numArray[2];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[2];
  }
}
//1 biggest
//2 smallest
if (numArray[1] > numArray[0] &&
  numArray[1] > numArray[2] &&
  numArray[1] > numArray[3] &&
  //split
  numArray[2] < numArray[0] &&
  numArray[2] < numArray[1] &&
  numArray[2] < numArray[3]) {
  a = numArray[1];
  d = numArray[2];
  //if first and last are pair
  if (numArray[0] > numArray[3]) {
    b = numArray[0];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[0];
  }
}

//1 biggest
//3 smallest
if (numArray[1] > numArray[0] &&
  numArray[1] > numArray[2] &&
  numArray[1] > numArray[3] &&
  //split
  numArray[3] < numArray[0] &&
  numArray[3] < numArray[1] &&
  numArray[3] < numArray[2]) {
  a = numArray[1];
  d = numArray[3];
  //If first and third are pair
  if (numArray[0] > numArray[2]) {
    b = numArray[0];
    c = numArray[2]
  } else {
    b = numArray[2];
    c = numArray[0];
  }
}

//2 biggest
//0 smallest
if (numArray[2] > numArray[0] &&
  numArray[2] > numArray[1] &&
  numArray[2] > numArray[3] &&
  //split
  numArray[0] < numArray[1] &&
  numArray[0] < numArray[2] &&
  numArray[0] < numArray[3]) {
  a = numArray[2];
  d = numArray[0];
  //If second and fourth are pair
  if (numArray[1] > numArray[3]) {
    b = numArray[1];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[1];
  }
}

//2 biggest
//1 smallest
if (numArray[2] > numArray[0] &&
  numArray[2] > numArray[1] &&
  numArray[2] > numArray[3] &&
  //split
  numArray[1] < numArray[0] &&
  numArray[1] < numArray[2] &&
  numArray[1] < numArray[3]) {
  a = numArray[2];
  d = numArray[1];
  //if first and last are pair
  if (numArray[0] > numArray[3]) {
    b = numArray[0];
    c = numArray[3]
  } else {
    b = numArray[3];
    c = numArray[0];
  }
}

//2 biggest
//3 smallest
if (numArray[2] > numArray[0] &&
  numArray[2] > numArray[1] &&
  numArray[2] > numArray[3] &&
  //split
  numArray[3] < numArray[0] &&
  numArray[3] < numArray[1] &&
  numArray[3] < numArray[2]) {
  a = numArray[2];
  d = numArray[3];
  //If first pair in middle
  if (numArray[0] > numArray[1]) {
    b = numArray[0];
    c = numArray[1]
  } else {
    b = numArray[1];
    c = numArray[0];
  }
}

//3 biggest
//0 smallest
if (numArray[3] > numArray[0] &&
  numArray[3] > numArray[1] &&
  numArray[3] > numArray[2] &&
  //split
  numArray[0] < numArray[1] &&
  numArray[0] < numArray[2] &&
  numArray[0] < numArray[3]) {
  a = numArray[3];
  d = numArray[0];
  //If second pair in middle
  if (numArray[1] > numArray[2]) {
    b = numArray[1];
    c = numArray[2]
  } else {
    b = numArray[2];
    c = numArray[1];
  }
}

//3 biggest
//1 smallest
if (numArray[3] > numArray[0] &&
  numArray[3] > numArray[1] &&
  numArray[3] > numArray[2] &&
  //split
  numArray[1] < numArray[0] &&
  numArray[1] < numArray[2] &&
  numArray[1] < numArray[3]) {
  a = numArray[3];
  d = numArray[1];
  //If first and third are pair
  if (numArray[0] > numArray[2]) {
    b = numArray[0];
    c = numArray[2]
  } else {
    b = numArray[2];
    c = numArray[0];
  }
}

//3 biggest
//2 smallest
if (numArray[3] > numArray[0] &&
  numArray[3] > numArray[1] &&
  numArray[3] > numArray[2] &&
  //split
  numArray[2] < numArray[0] &&
  numArray[2] < numArray[1] &&
  numArray[2] < numArray[3]) {
  a = numArray[3];
  d = numArray[1];
  //If first pair in middle
  if (numArray[0] > numArray[1]) {
    b = numArray[0];
    c = numArray[1]
  } else {
    b = numArray[1];
    c = numArray[0];
  }
}
console.log(a,b,c,d);
numArray.sort((a, b) => a - b);
console.log(numArray);

