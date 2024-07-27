// Activity 3: Closures in loops 

// Write a loop that creates an array of functions. each function should log its index when called. Use a closure to ensure each function logs the correct index.
// solution

function createFunctions(){
    let functions= []

    for(let i=0 ; i < 5 ; i++){
        functions.push((function(i){
            return ()=> {
                console.log(i);
            }
        })(i))
    }

    return functions
}

const functionArray = createFunctions()

functionArray.forEach((i) => { i() })

