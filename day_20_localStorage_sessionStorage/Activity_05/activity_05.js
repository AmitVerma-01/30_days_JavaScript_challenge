// Task 9: Write a function that accepts a key and a value, and saves the value to both localStorage and sessionStorage . Retrieve and log the values from both storage mechanisms.
// solution

function saveValue(key,value){
    localStorage.setItem(key,value) 
    sessionStorage.setItem(key,value) 
    console.log("from localStorage",localStorage.getItem(key));
    console.log("From sessionStorage",sessionStorage.getItem(key));
}

saveValue("name","Amit verma")


// Task 10: Write a function that clears all the data from both localStorage and SessionStorage . Verify that both Storages are empty.

function clearStorages(){

    console.log("localStorage Length before remove clearance",localStorage.length);
    console.log("sessionStorage Length before remove clearance",sessionStorage.length);
    
    sessionStorage.clear()
    localStorage.clear()
    console.log("localStorage Length after remove clearance",localStorage.length);
    console.log("sessionStorage Length after remove clearance",sessionStorage.length);
}

clearStorages();