// Activity 1: Two  sum

// Task 1: Solve the "Two Sum" problem on leetcode.
// solution

var twoSum = function(nums, target) {
    let map = {}
    for(let i=0;i<nums.length ; i++){
        let remain = target - nums[i];
        if(map[remain] != undefined){
            return [map[remain], i]
        }
        map[nums[i]]=i;
    }

    return [-1,-1];
};

const testCases = [{
         arr : [2,7,11,15],
         target : 9
    },{
        arr : [3,2,4],
        target : 6
    },{
        arr : [2,6,4,9,7,6,2,9],
        target : 18
    }
]

testCases.forEach(item => {
    const result = twoSum(item.arr,item.target)
    console.log(`Array : [${item.arr}], Target : ${item.target}, Ans : [${result}]`);
    
})