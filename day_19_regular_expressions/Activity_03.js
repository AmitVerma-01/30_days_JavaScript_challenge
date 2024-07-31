// Activity 3: Grouping and Capturing

// Task 5: Write a regular expression to capture the area code, Central office code, and line number from a US phone number format(e.g., (123) 456-7890)/ log the captures.
// Solution

const USphoneNumber = "(453) 456-7890";
const regexForAreaCode = /\((\d{3})\)\s(\d{3})-(\d{4})/
const matches = USphoneNumber.match(regexForAreaCode)
console.log(matches);
console.log(`areaCode : ${matches[1]}`);
console.log(`Central Office code : ${matches[2]}`);
console.log(`line number : ${matches[3]}`);

// Task 6: Write a regular expression to capture the username and domain from an email address. Log the Capture
// Solution

const emailId = 'username4.da@domai78n.com'
const emailRegex = /^([a-zA-Z0-9.+_-]+)@([a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/
const matchEmail = emailId.match(emailRegex)
console.log(`username : ${matchEmail[1]}`);
console.log(`domain : ${matchEmail[2]}`);