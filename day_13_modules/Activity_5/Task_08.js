// task 8: Use a module bundler like webpack or parcel to bulndle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.
// solution

function greet(name){
    console.log(`Hello, ${name}`)
}

module.exports = {greet}