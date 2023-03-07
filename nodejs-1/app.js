const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  // console.log("ritik");
  // process.exit();
  // console.log(req.url, req.method, req.headers);
  // if (req.url === "/home") {
  //   res.write("<h1>welcome home</h1>");
  //   res.end();
  // } else if (req.url === "/about") {
  //   res.write("<h1>welcome to About Us page</h1>");
  //   res.end();
  // } else if (req.url === "/node") {
  //   res.write("<h1>welcome to my nodejs project</h1>");
  //   res.end();
  // }
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    //async code
    req.on("data", (chunk) => {
      // console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      // console.log(parsedBody);
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message);
      fs.writeFile("message.txt", message, (err) => {
        res.statusCode = 302;
        res.setHeader("location", "/");
        return res.end();
      });
      // res.statusCode = 302;
      // res.setHeader("location", "/");
      // return res.end();
    });
    // res.statusCode = 302;
    // res.setHeader("location", "/");
    // return res.end();
  }

  //synchronous code
  // res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head><title>my first page</title></head>");
  res.write("<body><h1>Hello from my nodejs server</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(4000);
