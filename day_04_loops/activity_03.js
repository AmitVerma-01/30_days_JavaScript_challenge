// Activity 3: Do .. while Loop

// Task 5: write a program to print numbers from 1 to 5 using do..while loop.
//solution

let i=1;

do{
    console.log(i);
    i+=1;
}while(i<=5);


// Task 6: Write a program to calculate the factorial of a number using do...while loop
// solution

i=1;
let n = 10;
let ans=1;

do {
    ans *= i;
    i++;
} while (i<=n);

console.log("factorial of 10 is ", ans);