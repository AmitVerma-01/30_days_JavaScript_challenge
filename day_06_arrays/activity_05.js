// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array(matrix) and log the entire array to the console.
// solution

let arr =[[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15]]

console.log(arr);

for(let i=0;i<arr.length;i++){
    for(let j=0;j<arr[0].length;j++){
        console.log(arr[i][j]);
    }
}

// Task !2: Access and log a specific element from the teo dimensional array.
// solution

console.log("arr[2][1]" , arr[2][1]);