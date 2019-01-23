//
//  NOTE(@Camisul):
//        Not Usable in any shape or form!
//        Main purpose of this files is
//        better undestandig of whats
//        going on in main.js file.
//

//0 biggest
if (numArray[0] > numArray[1] &&
  numArray[0] > numArray[2] &&
  numArray[0] > numArray[3]) {
  a = numArray[0];
}
//1 biggest
if (numArray[1] > numArray[0] &&
  numArray[1] > numArray[2] &&
  numArray[1] > numArray[3]) {
  a = numArray[1];
}
//2 biggest
if (numArray[2] > numArray[0] &&
  numArray[2] > numArray[1] &&
  numArray[2] > numArray[3]) {
  a = numArray[1];
}
//3 biggest
if (numArray[3] > numArray[0] &&
  numArray[3] > numArray[1] &&
  numArray[3] > numArray[2]) {
  a = numArray[1];
}