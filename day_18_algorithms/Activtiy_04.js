// Activity 4: Array Algorithms

console.log("--------------Task 8---------------");
// TAsk 8: Write a function to rotate an array by k positions. Log the rotated array.
// solution

function reverse(arr,low,high){
    while(low<high){
        let temp=arr[low];
        arr[low]=arr[high]
        arr[high]=temp;
        low++;
        high--;
    }
}

const arr= [1,2,3,6,40]
function rotateByKPlace(arr,k){
    reverse(arr,0,k)
    reverse(arr,k+1,arr.length-1)
    reverse(arr,0,arr.length-1)
}
rotateByKPlace(arr,2)
console.log(arr);

console.log("--------------Task 9---------------");
//Task 9: Write a function to merge two sorted arrays into one sorted array. Log the merged sorted array.
// Solution 

function mergeTwoSortedArrays(arr1,arr2){
    let left = 0,right=0;
    let arr=[];
    while(left < arr1.length && right < arr2.length){
        if(arr1[left] <= arr2[right]){
            arr.push(arr1[left])
            left++;
        }else{
            arr.push(arr2[right])
            right++;
        }
    }
    while(left < arr1.length){
        arr.push(arr1[left])
        left++;
    }
    while(right < arr2.length){
        arr.push(arr2[right]);
        right++;
    }
    return arr;
}
const arr1 = [1,3,6,8,9]
const arr2 = [2,4,5,7]

// arr1.push(5)
// console.log(arr1);
const mergedArray = mergeTwoSortedArrays(arr1,arr2)
console.log(mergedArray);
