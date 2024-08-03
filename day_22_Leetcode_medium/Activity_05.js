// Activity 5: Group Anagrams

// Task 5: Solve the "Group Anagrams" problem on LeetCode.
//- Write a function that takes an array of strings and groups anagrams together.
//- Log the grouped anagrams for a few test cases.

var groupAnagrams = function(strs) {
    let mapObj={};
    let ans = []
    for(let i=0;i<strs.length;i++){
        let str = strs[i]
        let sortedStr  = str.split('').sort().join('');
        if(!mapObj[sortedStr]) mapObj[sortedStr]=[]
        mapObj[sortedStr].push(strs[i])
    }

    for(let key in mapObj){
        ans.push(mapObj[key]);
    }
    return ans;
};

const testCases = [["eat","tea","tan","ate","nat","bat"],[""],["a"]]

testCases.forEach(item => console.log(groupAnagrams(item)))