// Activity 3: String algorithms

console.log("--------------Task 6---------------");
// Task 6 : Write a function to count the occurences of each charater in a string. Log the character counts.
// solution

function countOccurence(str,ch){
    let count= 0;
    for (const c of str) {
        if(c===ch){
            count++;
        }
    }
    return count;
}

console.log(countOccurence("amitmaitdsa","a"));

function countCharacters(str){
    let counted = new Set();
    for(let i=0;i<str.length;i++){
        if(!counted.has(str[i])){
            const count = countOccurence(str,str[i])
            console.log(str[i], ":-", count);
            counted.add(str[i])
        } 
    }
}
countCharacters("amitamitdfsasdadewmitas")

console.log("--------------Task 7---------------");
// Task 7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.
// solution

function longestSubstringWithoutRepeatingCharacters(str) {
    let start = 0;
    let maxLength = 0;
    let charSet = new Set();

    for (let end = 0; end < str.length; end++) {
        while (charSet.has(str[end])) {
            charSet.delete(str[start]);
            start++;
        }
        charSet.add(str[end]);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

const str = "abcabqwacbb";
console.log(longestSubstringWithoutRepeatingCharacters(str)); // Output: 3 (the substring "abc")
