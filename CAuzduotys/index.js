const http = require("http");
const casual = require("casual");
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello word");
});
const city = casual.city;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});