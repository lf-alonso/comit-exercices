"use strict"; 
for (let lineNumber = 0; lineNumber <= 13; lineNumber++) {
  let stars = "";
  for(let starCount = 1; starCount <= lineNumber; starCount++){
    stars = stars + "*";
  }
  console.log(stars)
}
let lineNumber2 = 1;
while (lineNumber2 <= 13) {
  let message = "";
  let starcount2 = 1;
  while (starcount2 <= lineNumber2) {
  message = message + "*";
  starcount2++;
  }
  console.log(message);
  lineNumber2++;
}