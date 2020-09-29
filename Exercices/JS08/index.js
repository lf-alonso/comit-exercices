"use strict";
let weekday = +prompt("Insert weekday number:");
if(weekday == 1){
    console.log("Sunday");
    }
    else if (weekday == 2){
        console.log("Monday");
    }
    else if (weekday == 3){
        console.log("Tuesday");
    }
    else if (weekday == 4){
        console.log("Wednesday");
    }
    else if (weekday == 5){
        console.log("Thursday");
    }
    else if (weekday == 6){
        console.log("Friday");
    }
    else if (weekday == 7){
        console.log("Saturday");
    }
    else {
        console.log("Not a number between 1 and 7");
    }

    switch (weekday) {
        case 1:
            {alert("Sunday");}
            break;
        case 2:
            {alert("Monday");}
            break;
        case 3:
            {alert("tuesday");}
            break;
        case 4:
            {alert("Wednesday");}
            break;
        case 5:
            {alert("Thursday");}
            break;
        case 6:
            {alert("Friday");}
            break;
        case 7:
            {alert("Saturday");}
        break;
        default: {alert("Not a number between 1 and 7");}
        break;
    }