// làm việc với callback không dùng synchronous 
//nên tất cả dưới đây code dùng ()=>{} cho asynchronous
const fs = require('fs');
const crypto = require('crypto');
// TODO: phụ trợ đếm giờ operation
const start = Date.now();

// tăng kích thước thread pool bằng cách set cứng 1
// có nghĩa ép chạy 1 luồng
process.env.UV_THREADPOOL_SIZE=2;

setTimeout(() => console.log("TImer 1 finish!"), 0);
setImmediate(() => console.log("Immididate 1 finish!"));
fs.readFile('text.txt', () => {
  console.log('I/O finished');
  setTimeout(() => console.log("Timeout 2 finished!"), 0);
  setTimeout(() => console.log("Timeout 3 finished!"), 3000);
  setImmediate(() => console.log("Immediately 2 finished"));

  // căng phết vì libuv hoạt động ranh giới với JS
  /** lưu ý là nextTịck() chạy sau mỗi phase asap
   * mà nãy chạy phase timer để xếp hàng đợi cho 2 thằng timer rồi
   * nên nextTịck() chạy trước setImmidiate trong ca này */
  process.nextTick(() => console.log("Process.nextTick done!"));

 
  // synchro
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, "Password encrypted");
  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log(Date.now() - start, "Password encrypted");
 
  // /** microTaskQueue thử nghiệm chạy 4 luồng libuv */
  // // thread #1
  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // })
  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // })
  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // })
  // // thread #4
  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log(Date.now() - start, "Password encrypted");
  // })
})
console.log("Hello from the top-level code");