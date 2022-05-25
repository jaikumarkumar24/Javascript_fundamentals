
//synchronous program

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
  }

  const name = 'Miriam';
  const greeting = makeGreeting(name);
  console.log(greeting);


  async function fetchProducts()  {
    // This is an async function
    try {
        const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
        if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
        }
        const json = await response.json();
        console.log(json[0].name);
        //return json;
    }
    catch(error) {
        console.error(`Could not get products: ${error}`);
      }
  }

  fetchProducts();