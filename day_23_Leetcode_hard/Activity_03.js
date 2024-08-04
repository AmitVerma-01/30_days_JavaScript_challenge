// Activity 3: Trapping rain water

// Task 3: Solve the "Trapping rain water" problem on leetcode.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    let ans = 0;
        let rightMax = new Array(height.length).fill(0);
        let maxRight = Number.MIN_SAFE_INTEGER;

        for (let i = height.length - 1; i >= 0; i--) {
            maxRight = Math.max(maxRight, height[i]);
            rightMax[i] = maxRight;
        }

        let maxLeft = Number.MIN_SAFE_INTEGER;
        for (let i = 0; i < height.length; i++) {
            maxLeft = Math.max(maxLeft, height[i]);
            ans += Math.min(maxLeft, rightMax[i]) - height[i];
        }

        return ans;
};