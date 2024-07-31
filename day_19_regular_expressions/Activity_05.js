// Activity 5: Practical Applications

// Task 9: Write a regular expression to validate a simple password(must include at least 1 uppercase letter, 1 lowercase letter, 1 digit, and one special character). Log whether the password is valid.
// Solution

const password = "Qwerty12@#"
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[`~!@#$%^&*])[a-zA-Z\d~`!@#$%^&*]{8,}$/
const result = password.match(regex)

if(result && result[0] ){
    console.log("Passwrod is Valid");
}else{
    console.log('Password in Invalid');
}

// Task 10 : Write a regular expression to validate a URL. Log whether the URL is valid.
// Solution

const URL = "https://theamit.tech"
const urlRegex =  /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})+(\/[a-zA-Z0-9!@#$%^&]*)*\/?$/;

const urls = [
    "https://www.example.com",
    "http://example.com",
    "https://example.co.uk",
    "www.example.com",
    "example.com",
    "http://sub.domain.com",
    "https://sub.domain.com/path",
    "example",
    "http://example",
    "https://example.c",
    "https://example.123",
    "https://example.com/path/to/resource",
    "http://example.com/path/to/resource/",
    "https://www.example.com/path/to/resource!@#$"
]

urls.forEach( url =>{
    if(url.match(urlRegex)){
        console.log("valid URL");
    }else{
        console.log("invalid url");
    }
})