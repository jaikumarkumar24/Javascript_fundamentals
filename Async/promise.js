
//Promise
const fetchPromise = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

//calling the fetch() API, and assigning the return value to the fetchPromise variable
//This should output something like: Promise { <state>: "pending" }

console.log(fetchPromise);      //Promise {<pending>}
                                //we have a Promise object, and it has a state whose value is "pending"
                                //The "pending" state means that the fetch operation is still going on

    
//passing a handler function into the Promise's then() method
//The fetch operation succeeds, the promise will call our handler
fetchPromise.then( response => {
    console.log(`Received response: ${response.status}`);
  });
  
  console.log("Started request...");

//output
// Promise { <state>: "pending" }
// Started request...
// Received response: 200

//Chaining Promise
fetchPromise.then( response => {
    const jsonPromise = response.json();
    jsonPromise.then( json => {
      console.log(json[0].name);
    });
  });


//errors
fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => {
    console.log(json[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });

//pending - the promise has been created, and the asynchronous function it's associated with has not succeeded or failed yet
//fulfilled - the asynchronous function has succeeded. When a promise is fulfilled, its then() handler is called
//rejected  - the asynchronous function has failed. When a promise is rejected, its catch() handler is called

//Multiple promise: - Promise.all()

const fetchPromise1 = 1 // url
const fetchPromise2 = 2
const fetchPromise3 = 3
const fetchPromise4 = 4
Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
.then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });
 

  //promise.any
  //It returns a single promise that resolves as soon as any of the promises in the iterable fulfills, with the value of the fulfilled promise
  //If no promises in the iterable fulfill (if all of the given promises are rejected), then the returned promise is rejected with an AggregateError

const promise1 = Promise.reject(0);
const promise2 = new Promise((resolve) => setTimeout(resolve, 100, 'quick'));
const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

const promises = [promise1, promise2, promise3];

Promise.any(promises).then((value) => console.log(value));


const pErr = new Promise((resolve, reject) => {
    reject('Always fails');
  });
  
  Promise.any([pErr]).catch((err) => {
    console.log(err);
  })
  // expected output: "AggregateError: No Promise in Promise.any was resolved"