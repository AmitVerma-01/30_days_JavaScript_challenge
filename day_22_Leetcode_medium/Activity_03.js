// Activity 3: Container eith most water

// Task 3: Solve the "Container With most water" problem on LeetCode.



var maxArea = function(height) {
    let left = 0;
   let right = height.length - 1;
   let maxWater = 0;

   while (left < right) {

       const width = right - left;
       const minHeight = Math.min(height[left], height[right]);
       const currentWater = width * minHeight;

       maxWater = Math.max(maxWater, currentWater);

       if (height[left] < height[right]) {
           left++;
       } else {
           right--;
       }
   }

   return maxWater;

};