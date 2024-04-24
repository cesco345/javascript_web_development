const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});
// Route parameters usage: http://localhost:5000/api/posts/2018/1
app.get("/api/posts/:year/:month", (req, res) => {
  res.send(req.params);
});
// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}...`);
});
