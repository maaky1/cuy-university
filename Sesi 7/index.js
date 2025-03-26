const http = require("http");
const rupiah = require("rupiah-format");
const host = "localhost";
const port = "3002";

const server = http.createServer(function (request, response) {
  response.statusCode = "200";
  const uang = 10000;

  response.end(rupiah.convert(uang));
});

server.listen(port, host, function () {
  console.log(`Server Menyala di ${host}:${port}`);
});
