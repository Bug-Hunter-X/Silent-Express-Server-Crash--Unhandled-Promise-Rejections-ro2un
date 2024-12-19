const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//Uncommon error: Server crashes without any error messages in console
//This can happen due to unhandled promise rejections or asynchronous operations that throw errors outside of an async function or callback.