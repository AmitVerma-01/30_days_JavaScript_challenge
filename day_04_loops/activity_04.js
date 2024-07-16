// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loop.
// solution
/*
*
**
***
****
*****
*/

let n=8;
for(let i=0;i<n;i++){
    let str = "*"
    for(let j=0;j<i;j++){
        str+="*";
    }
    console.log(str);
}