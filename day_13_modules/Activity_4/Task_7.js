// Task 7: Import a third-party module (e.g., axios) using npm. Import and use this module to make a network request in a script.
// solution

const axios = require('axios')

axios('https://api.github.com/users/AmitVerma-01')
.then((res) => {
    console.log(res.data);
} )