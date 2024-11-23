const express = require('express');
const app = express();

const port = 3000;

const blog = {
  id: 1,
  title: 'Blog title',
  description: 'Blog description',
};

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send(blog);
});
