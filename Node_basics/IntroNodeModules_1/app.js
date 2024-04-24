const http = require("http");

const server = http.createServer(
  (req, res) => {
    if (req.url === "/") {
      res.end("Welcome to our home page");
      res.end();
    }

    if (req.url === "/about") {
      res.end("Here is our short history");
      res.end();
    }

    if (req.url === "/contact") {
      res.end("Contact us");
      res.end();
    }

    if (req.url === "/error") {
      res.end("Page not found");
      res.end();
    }

    if (req.url === "/api/courses") {
      res.write(JSON.stringify([1, 2, 3]));
      res.end();
    }
  } // Add a closing curly brace here
);
server.listen(5000);
console.log("Server is running on port 5000");
