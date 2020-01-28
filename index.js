const express = require('express');
const fakePosts = require('./routes/posts');
const comments = require('./routes/comments')


const app = express();
const port = 8000;

app.use('/api/comments', comments)
app.use('/api/posts', fakePosts)

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
