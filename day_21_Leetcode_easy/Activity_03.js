// Activity 3: Palindrome Number

// Task 3: Solve the "Palindrome Number" problem on leetcode.
// solution

var isPalindrome = function(x) {
    if(x < 0) return false;
    let ans=0;
    const temp = x;
    while(x){
        let digit = x%10;
        ans = ans*10+digit;
        x= Math.floor(x/10)
    }
    return ans == temp;
};

const testCases = [121,124,-121,36563]

testCases.forEach( num => {
    console.log(`${num} is palindrome :- ${isPalindrome(num)}`);
    
})