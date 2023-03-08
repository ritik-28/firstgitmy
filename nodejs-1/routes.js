const fs = require("fs");

const requestHandler = (req, res) => {
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
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {
        fs.readFile("message.txt", "utf-8", (err, data) => {
          res.write("<html>");
          res.write("<head><title>Enter Message</title></head>");
          res.write(`<p>${data}</p>`);
          res.write(
            `<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>`
          );
          res.end();
        });
        req.statusCode = 302;
      });
    });
  }
};

// 1. module.exports = requestHandler;
//2.  module.exports = {
//   handler: requestHandler,
//   sometext: "this is module routes text",

module.exports.handler = requestHandler;
