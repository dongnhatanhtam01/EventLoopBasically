/**
 *! Sẽ như nào nếu đọc nhanh hơn ghi - backpressure
 *  Tốc độ đọc lúc nào cũng nhanh hơn tốc độ ghi
 * Nguyên tắc của Stream thì lại đọc rồi ghi những chunks nhỏ ở đâu đó trước khi response
 * tới clients. Khi đó hiện tượng ovewhemle hay backpressure xảy ra
 */
/**
 * * Lúc đó người ta dùng pipe operator để sửa vấn đề đó - chấp nhận duplex(bị đúp) trong stream
 */

// * SOLUTION 3
const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req,res) => {
  const readable = fs.createReadStream('text.txt')
  //* Công thức readableSource.pipe(writedableDest)
  readable.pipe(res);
})

server.listen(8000, '127.0.0.1', ()=> {
  console.log('Listening to 8000...');
})