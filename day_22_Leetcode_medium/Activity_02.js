// Activity 2: Longest Substring without repeating characters

// Task 2: Solve the "Longest Substring without repeating characters" Problem on LeetCode. 
//- Write a function that takes a string and return the length of the longest substring without repeating characters.
//- Log the length for a few test cases, including edge cases.

// solution

var lengthOfLongestSubstring = function(s) {
    let start = 0,end=0;
    if(!s) return 0;
    let mySet = new Set();
    let maxLen = 1;
    while(start <= end && end < s.length){
        if(!mySet.has(s[end])){
            maxLen = maxLen > (end-start+1) ? maxLen : (end-start+1);
            mySet.add(s[end])
            end++;
        }else{
            mySet.delete(s[start])
            start++;
        }
    }
    return maxLen;
};