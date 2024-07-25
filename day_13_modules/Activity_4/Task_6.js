// Activity 4: Using third party Modules

// TAsk 6 : Install a third party module (e.g. Lodash) using nom. Import and use a function from this module in a script.
// solution

const _ = require('lodash')

const arr = [1,2,3,4,5,6,7,5,6,9,7,8,0,0,5,5]

console.log(_.chunk(arr , 2));
