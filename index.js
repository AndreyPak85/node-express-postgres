const express = require('express');
const userRouter = require('./routes/user.router');
const postRouter = require('./routes/post.router');

const app = express();

app.use(express.json());
app.use('/api', userRouter);
app.use('/api', postRouter);

const start = async () => {
  app.listen(4200, () => {
    console.log('Server running on port 4200');
  });
};

start();
