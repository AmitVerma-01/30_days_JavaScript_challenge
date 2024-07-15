// Activity 2: Nested if-else Statements

// Task 3: Write a program to find the largest of three numbers using nested if-else statements.
// solution

let a = 5;
var b = 9;
const c =10 ;

if( a > b){
    if(a>c){
        console.log(`a ${a} is the largest number`);
    }else{
        console.log(`${c} is the largest number`);
    }
}
else{
    if( b > c ){
        console.log(`${b} is the largest number`);
    }else{
        console.log(`${c} is the largest number`);
    }
}