// Activity 4: Recursive Search

// Task 7: Write a recursive function to perform a binary search on a sorted array. log the index of the target element for a few test cases.
// solution
console.log("--------------Task 7---------------");

function recursiveBinary(arr,low,high,target){
    if(low>high){
        return -1;
    }
    const mid=Math.floor((low+high)/2);
    if(arr[mid] === target){
        return mid;
    }else if(arr[mid] > target){
        return recursiveBinary(arr,low,mid-1,target)
    }else{
        return recursiveBinary(arr,mid+1,high,target)
    }
}

const testCases1 = [
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 5, expected: 4 },
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 11, expected: -1 },
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], target: 1, expected: 0 },
    { arr: [1, 3, 5, 7, 9, 11, 13, 15], target: 7, expected: 3 },
    { arr: [1, 3, 5, 7, 9, 11, 13, 15], target: 2, expected: -1 },
    { arr: [1], target: 1, expected: 0 },
    { arr: [1], target: 0, expected: -1 },
    { arr: [], target: 3, expected: -1 }
  ]

  testCases1.forEach((item) => console.log(recursiveBinary(item.arr,0,item.arr.length-1,item.target)))
// Task 8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.
// solution

console.log("--------------Task 8---------------");

function countOccurences(arr,target){
    if(arr.length === 0){
        return 0;
    }
    return (arr[0] === target ? 1 : 0) + countOccurences(arr.slice(1),target);
}

const testCases = [
    { arr: [1, 2, 3, 4, 5, 1, 1, 1], target: 1 },
    { arr: [10, 20, 30, 20, 20, 40], target: 20 },
    { arr: [-1, -2, -3, -1, -1, -4], target: -1 },
    { arr: [0, 0, 0, 0, 0], target: 0 },
    { arr: [5], target: 5 },
    { arr: [], target: 3 }
  ];

testCases.forEach((item) => {
    console.log(`Occurences of ${item.target} in ${item.arr} is: ${countOccurences(item.arr, item.target)}`);
})