const http = require('http');
const fs = require('fs');

const index = fs.readFileSync(`${__dirname}/app/dist/test/index.html`);

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  console.log(request.url);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

http.createServer(onRequest).listen(port);

console.dir(`listening on 127.0.0.1.: ${port}`);