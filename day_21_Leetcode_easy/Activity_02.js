// Activity 2: Reverse Integer

// Task 2: Solve the Reverse INteger probelm on leetcode.
// solution

var reverse = function(x) {
    let ans=0;
    let sign = 1;
    if(x < 0){
        sign = -1;
        x=x*(-1);
    }
    while(x>0){
        let digit = x%10;
        ans=ans*10+digit;
        x=Math.floor(x/10);
    }
    ans*=sign;
    if(ans > 2147483647 || ans < -2147483648)
        return 0;
    return ans;
};

const testCases = [123465498 ,-135648,-64165,3215798]

testCases.forEach(num => {
    const ans = reverse(num)
    console.log(`${num}, reverse: ${ans}`);
    
})
