// Activity 1: Median of two sorted arrays

// Task 1: solve the "median of two sorted array" problem on leetcode.
//- Write a function that takes two sorted arrays of integers and returns the median of two sorted arrays.
//- Log the median for a few test cases, includig edge cases.

// solution 1

var findMedianSortedArrays = function(nums1, nums2) {
    let num = []
    nums1.forEach(n => num.push(n))
    nums2.forEach(n => num.push(n))
    num.sort((a,b) => a - b)
    let a = num.length

    return a % 2 == 0 ? (num[a/2]+num[(a/2)-1])/2 : (num[(Math.floor(a/2))]);
};

// Solution 2

var findMedianSortedArrays = function(nums1, nums2) {
    let nums=[];
    let left = 0,right = 0;
    while(left < nums1.length && right < nums2.length){
        if(nums1[left]<=nums2[right]){
            nums.push(nums1[left])
            left++;
        }else{
            nums.push(nums2[right])
            right++
        }
    }
    while(left < nums1.length){
        nums.push(nums1[left])
        left++;
    }
    while(right < nums2.length){
        nums.push(nums2[right])
        right++;
    }

    if(nums.length % 2 === 0){
        return (nums[Math.floor(nums.length/2)] + nums[Math.floor(nums.length/2)-1])/2;
    }
    return nums[Math.floor(nums.length/2)];
};

// Solution 3

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const n = nums1.length;
       const m = nums2.length;
       if (n > m) return findMedianSortedArrays(nums2, nums1);

       const len = n + m;
       const left = Math.floor((n + m + 1) / 2);

       let low = 0, high = n;
       while (low <= high) {
           const mid1 = Math.floor((low + high) / 2);
           const mid2 = left - mid1;

           const l1 = mid1 > 0 ? nums1[mid1 - 1] : Number.MIN_SAFE_INTEGER;
           const l2 = mid2 > 0 ? nums2[mid2 - 1] : Number.MIN_SAFE_INTEGER;
           const r1 = mid1 < n ? nums1[mid1] : Number.MAX_SAFE_INTEGER;
           const r2 = mid2 < m ? nums2[mid2] : Number.MAX_SAFE_INTEGER;

           if (l1 <= r2 && l2 <= r1) {
               if (len % 2 === 1) {
                   return Math.max(l1, l2);
               } else {
                   return (Math.max(l1, l2) + Math.min(r1, r2)) / 2.0;
               }
           } else if (l2 > r1) {
               low = mid1 + 1;
           } else {
               high = mid1 - 1;
           }
       }
       return 0;
};

