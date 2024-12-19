const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  //Simulate an asynchronous operation that might throw an error
  someAsyncOperation()
    .then(() => res.send('Hello World!'))
    .catch(err => {
      console.error('Error handling request:', err);
      res.status(500).send('Internal Server Error');
    });
});

async function someAsyncOperation() {
  // Simulate an error condition
  //throw new Error('Simulated asynchronous operation error'); 
  //Uncomment the above line to see the error handling in action
  await new Promise(resolve => setTimeout(resolve, 100));
  return 'Operation completed';
}

//Use process.on to handle uncaught promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // Application specific logging, throwing an error, or other logic here
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});