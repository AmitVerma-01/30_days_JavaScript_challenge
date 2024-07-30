// Sorting Algorithms

// Task 1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
// Solution
console.log("--------------Task 1---------------");

function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
}

let arrays = [
    [3, 1, 4, 1, 5],
    [9, 2, 6, 5, 3],
    [5, 8, 9, 7, 9],
    [3, 2, 3, 8, 4]
];
arrays.forEach(item => {
    console.log(`Unsorted array [${item}],`)
    const sortedArr = bubbleSort(item)
    console.log(`After applying bubble sort [${sortedArr}]`);
})

console.log("--------------Task 2---------------");
// Task 2: Implement the selection sort algorithm to sort an array of numbers in ascending order.Log the sorted array.
// Solution
arrays = [
    [3, 1, 4, 1, 5],
    [9, 2, 6, 5, 3],
    [5, 8, 9, 7, 9],
    [3, 2, 3, 8, 4]
];

function selectionSort(arr){
    for(let i=0;i<arr.length ; i++){
        let mini=i;
        for(let j=i;j<arr.length ;j++){
            if(arr[j]<arr[mini]){
                mini=j
            }
        }
        let temp=arr[i];
        arr[i]=arr[mini];
        arr[mini]=temp;
    }
    return arr;
}

arrays.forEach(item => {
    console.log(`Unsorted array [${item}],`);
    const sortedArr = selectionSort(item)
    console.log(`After applying selection sort [${sortedArr}]`);
})

// Task 3: Implement the quick sort algorithm ti sort an array of numbers in ascending order. Log the sorted array.
// Solution
console.log("--------------Task 3---------------");

function partitionIndex(arr,low,high){
    let pivot=arr[low];
    let i=low,j=high;
    while(i<=j){
        while(arr[i]<=pivot && i<= high)
            i++;
        while(arr[j] > pivot )
            j--;
        if(i<j){
            let temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }   
    }
    arr[low]=arr[j];
    arr[j]=pivot;
    return j;
}

const arr = [4, 5, 3, 7, 2, 1, 9, 6];

function quickSort(arr,low,high){
    if(low<high){
        let pI = partitionIndex(arr,low,high);
        quickSort(arr,low,pI-1)
        quickSort(arr,pI+1,high);
    }

}
console.log(`Array before [${arr}]`);
quickSort(arr,0,arr.length-1)
console.log(`Array after Quick Sort [${arr}]`);