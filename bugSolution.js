const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body);
  if (Object.keys(req.body).length === 0) {
    return res.status(400).send('Request body is empty');
  }
  res.send('User registered');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});