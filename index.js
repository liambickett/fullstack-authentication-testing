import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'nerds' });
});

const PORT = process.env.PORT;

app.listen(PORT || 5000);
