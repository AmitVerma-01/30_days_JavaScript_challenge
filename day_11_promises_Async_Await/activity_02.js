// Activity 2: Chaining Promises

// task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.
// solution

function fetchData(url, delay) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(`Data from ${url}`);
      }, delay);
    });
  }
  
  
  fetchData('https://api.server1.com', 1000)
    .then(data1 => {
      console.log(data1);
      return fetchData('https://api.server2.com', 2000);
    })
    .then(data2 => {
      console.log(data2);
      return fetchData('https://api.server3.com', 1500);
    })
    .then(data3 => {
      console.log(data3);
      return fetchData('https://api.server4.com', 1000);
    })
    .then(data4 => {
      console.log(data4);
      console.log('All data fetched successfully');
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  