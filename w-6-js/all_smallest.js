//
//  NOTE(@Camisul):
//        Not Usable in any shape or form!
//        Main purpose of this files is
//        better undestandig of whats
//        going on in main.js file.
//

//0 smallest
if (numArray[0] < numArray[1] &&
  numArray[0] < numArray[2] &&
  numArray[0] < numArray[3]) {
  d = numArray[0];
}
//1 smallest
if (numArray[1] < numArray[0] &&
  numArray[1] < numArray[2] &&
  numArray[1] < numArray[3]) {
  d = numArray[1];
}

//2 smallest
if (numArray[2] < numArray[0] &&
  numArray[2] < numArray[1] &&
  numArray[2] < numArray[3]) {
  d = numArray[2];
}
//3 smallest
if (numArray[3] < numArray[0] &&
  numArray[3] < numArray[1] &&
  numArray[3] < numArray[2]) {
  d = numArray[3];
}