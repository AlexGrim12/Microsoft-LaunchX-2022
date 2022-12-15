const { write } = require("fs");
const http = require("http");
const RetrieveDate = require("./modules/retrievedate");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write(RetrieveDate.RetrieveDate());
    res.write(req.url);
    res.end("\nHello World");
  })
  .listen(8080);

console.log("Server running at http://localhost:8080/");
