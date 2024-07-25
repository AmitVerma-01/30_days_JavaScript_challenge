// TAsk 4: Create a module that exports a signle function using default export. Import and use this function in another script;
//solution
function isAdult(age){
    if(age < 18){
        return "Not an adult guy"
    }else{
        return "An adult guy"
    }
}

export default isAdult;