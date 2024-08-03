// Activity 4: 3Sum 

// Task 4: Solve the "3Sum" problem on LeetCode.
//- Write a function that takes an aray of integers and find all the unique triplets in the array which give the sum of zero.
//- Log the triplets for a few test cases, including edge cases.


var threeSum = function(nums) {
    nums.sort((a, b) => a - b); 
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        let j = i + 1;
        let k = nums.length - 1;

        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum < 0) {
                j++;
            } else if (sum > 0) {
                k--;
            } else {
                ans.push([nums[i], nums[j], nums[k]]);
                j++;
                k--;
                while (j < k && nums[j] === nums[j - 1]) j++; 
                while (j < k && nums[k] === nums[k + 1]) k--; 
            }
        }
    }
    return ans;
};
