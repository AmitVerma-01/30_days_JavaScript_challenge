// Activity 2: Searching algorithm

console.log("--------------Task 4---------------");
// Task 4: Implement the linear search algorithm to find  target value in an array.  Log the index of the target value
// Solution

function linearSearch(arr,target){
    for(let i=0;i<arr.length ;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return -1;
}

const arr = [4, 5, 3, 7, 2, 1, 9, 6];
console.log(linearSearch(arr,1));

console.log("--------------Task 5---------------");
// Task 4: Implement the Binary search algorithm to find  target value in a sorted array.  Log the index of the target value
// Solution

function binarySearch(arr,target){
    let i=0,j=arr.length-1;
    while(i<=j){
        let mid = Math.floor((i+j)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            i = mid+1;
        }else j=mid-1;
    }
    return -1;
}
const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(binarySearch(sortedArray,9));