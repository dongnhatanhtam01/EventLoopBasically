// Quan trong:  với HTTP server tự dộng emit event khi server on
// Dưới đây không dùng emit thủ công như các ví dụ trước mà emit bằng browser
// Ví dụ dưới có log ra nguyên nhân tại sao emit 2 lần. Do browser lúc nào cũng gọi 1 path và 1favicon

const EventEmitter = require('events');
const http = require('http');

// khác một chút nhưng đây cũng là tạo instance
const server = http.createServer();

server.on('request', (req,res)=>{
  console.log('Request received');
  console.log(req.url);
  res.end('Request received');
});

server.on('request', (req,res)=>{
  console.log('Another request :)');
  res.end('Another request :)');
});

server.on('close', ()=>{
  console.log('Server closed');
});

// start server
server.listen(8000, '127.0.0.1', ()=>{
  console.log('Waiting for request...');
});