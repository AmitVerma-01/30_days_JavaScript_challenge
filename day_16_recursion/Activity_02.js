// Activity 2: Recursion with arrays

// Task 3: Write a recursive function to find the sum of all elements in an array.  Log the result for a few test cases.
// solution
console.log("--------------Task 3---------------");
function sumOfArrayElements(arr){
    if(arr.length === 0){
        return 0;
    }

    return arr[0]+sumOfArrayElements(arr.slice(1))
}

const testCases = [
    [1, 2, 3, 4, 5],
    [10, 20, 30, 40, 50],
    [-1, -2, -3, -4, -5],
    [0, 0, 0, 0, 0],
    [5],
    []
  ];
  
testCases.forEach((arr) => {
    const result = sumOfArrayElements(arr)
    console.log(`Sum of [${arr}] is : ${result}`);
})

// TAsk 4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases
// Solution
console.log("--------------Task 4---------------");

function maxelement(arr,maxEle){
    if(arr.length === 0){

        return maxEle ? maxEle : 0;
    }
    if(arr[0]>maxEle){
        maxEle=arr[0];
    }
    return maxelement(arr.slice(1),maxEle)
}


testCases.forEach((arr)=>{
    console.log(`Max Element in ${arr} is: ${maxelement(arr,arr[0])}`);
})
  