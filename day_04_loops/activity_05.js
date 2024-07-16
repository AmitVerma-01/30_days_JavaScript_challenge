// Activity 5: Loop Control Statements

// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
// solution

for(let i=1;i<=10;i++){
    if(i===5)
        continue;
    console.log(i);
}

//Task 9: wrtie a program to print numbers from 1 to 10, but stop loop when the number is 7 using the break statement.
// solution

for(let i=1;i<=10;i++){
    console.log(i);
    if(i===7)
        break;
}