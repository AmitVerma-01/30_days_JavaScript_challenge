// Activity 5: Valid Parantheses

// Task 5: Solve the "valid Parantheses" problem on LeetCode.
// solution

var isValid = function(s) {
    let arr = [];
    for(let char of s){
        if(char == '[' || char == '{' || char == '('){
            arr.push(char);
        }else if(char == '}'){
            if(arr[arr.length-1] == '{')
                arr.pop();
            else return false;
        }
        if(char == ']'){
            if(arr[arr.length-1] == '[')
                arr.pop();
            else return false;
        }
        if(char == ')'){
            if(arr[arr.length-1] == '(')
                arr.pop();
            else return false;
        }
    }
    return !arr.length
};


const testCases = ['()','({})',"(){}({}[])",'(){}){(})']

testCases.forEach(item => {
    console.log(`${item} is valid parantheses :- ${isValid(item)}`);
    
})