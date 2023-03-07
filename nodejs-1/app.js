const http = require("http");

const server = http.createServer((req, res) => {
  // console.log("ritik");
  // process.exit();
  // console.log(req.url, req.method, req.headers);
  if (req.url === "/home") {
    res.write("<h1>welcome home</h1>");
    res.end();
  } else if (req.url === "/about") {
    res.write("<h1>welcome to About Us page</h1>");
    res.end();
  } else if (req.url === "/node") {
    res.write("<h1>welcome to my nodejs project</h1>");
    res.end();
  }
  // res.setHeader("content-type", "text/html");
  // res.write("<html>");
  // res.write("<head><title>my first page</title></head>");
  // res.write("<body><h1>Hello from my nodejs server</h1></body>");
  // res.write("</html>");
  // res.end();
});

server.listen(4000);
