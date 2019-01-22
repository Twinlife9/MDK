//
//  NOTE(@Camisul):
//        Not Usable in any shape or form!
//        Main purpose of this files is
//        better undestandig of whats
//        going on in main.js file.
//

//If first pair in middle
if (numArray[0] > numArray[1]) {
  b = numArray[0];
  c = numArray[1]
} else {
  b = numArray[1];
  c = numArray[0];
}

//If second pair in middle
if (numArray[1] > numArray[2]) {
  b = numArray[1];
  c = numArray[2]
} else {
  b = numArray[2];
  c = numArray[1];
}

//If third pair in middle
if (numArray[2] > numArray[3]) {
  b = numArray[2];
  c = numArray[3]
} else {
  b = numArray[3];
  c = numArray[2];
}

//If first and third are pair
if (numArray[0] > numArray[2]) {
  b = numArray[0];
  c = numArray[2]
} else {
  b = numArray[2];
  c = numArray[0];
}

//If second and fourth are pair
if (numArray[1] > numArray[3]) {
  b = numArray[1];
  c = numArray[3]
} else {
  b = numArray[3];
  c = numArray[1];
}

//if first and last are pair
if (numArray[0] > numArray[3]) {
  b = numArray[0];
  c = numArray[3]
} else {
  b = numArray[3];
  c = numArray[0];
}
