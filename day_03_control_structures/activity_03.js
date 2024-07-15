// Activity 3: Switch Case
 
// Task 4: Write a program that uses a switch case to determine the day of the week based on a number(1-7) and log the day name to the console.
//solution

let dayNum = 5;

switch (dayNum) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;

    default:
        console.log("Invalid Day Number");
        break;
}


// Task 5: Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score andlog the grade to the console.
// Solution


let marks =92;

switch (true) {
    case marks >= 90:
        console.log("Grade 'A'");
        break;
    case marks >= 75:
        console.log("Grade 'B'");
        break;
    case marks >= 60:
        console.log("Grade 'C'");
        break;
    case marks >= 33:
        console.log("Grade 'D'");
        break;

    default:
        console.log("Grade 'F'");
        break;
}