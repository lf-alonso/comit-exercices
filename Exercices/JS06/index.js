"use strict"; 
alert("Enter the current hour");
let hour = prompt("insert hour between 0 - 23:");
Number(hour);
if (hour < 0 || hour > 23) {
    alert("Input incorrect, please insert hour between 0 - 23");
} else if(hour < 8 || hour >= 18){
    alert("We are closed!");
} else if(hour >= 8 && hour < 18){
    alert("We are open!");
}