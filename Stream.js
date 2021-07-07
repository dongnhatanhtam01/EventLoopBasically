//* declare Node js lib - used for file reading
const fs = require('fs');

//* declare instance of Node js - http request
const server = require('http').createServer();

//TODO 3.Add listener
server.on('request', (req, res) => {
  //* solution 1 - muốn gửi data đi thì đọc hết file trước đã
  /**
   *!  fs.readFile('text.txt', (error, data )=> {
   *!  if(error) console.log(err);
   *!  res.end(data);
   *! }); 
   */

  //* solution 2 - Streams
  const readable = fs.createReadStream('text1.txt');
  
  /**
   * * READ DATA
   * ! Lưu ý
   * TODO Muốn stream data thì phải có writedabled vào Stream
   * TODO Tức là mình đang stream những mảnh chunks đã ghi (write) đến clients
   */
  readable.on('data', chunk => {
    res.write(chunk);
  })
  
  /** 
   ** END STREAM
   ** data đang gửi rồi - giờ nó cứ chia nhỏ gửi đi - khi nào người dùng tắt - 
   ** sự kiện end gọi res.end() vô tắt
   */
  readable.on('end', ()=>{
    res.end()
  })

  /**
   ** CATCH STREAM ERROR 
   */
  readable.on('error', err=>{
    console.log(err);
    res.statusCode = 500;
    res.end('File not found!');
  })
})

//TODO 1.listen to server
server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to 8000...');
})