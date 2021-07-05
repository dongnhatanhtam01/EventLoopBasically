const fs = require('fs');

setTimeout(()=>console.log("TImer 1 finish!"),0);
setImmediate(()=>console.log("Immididate 1 finish!"));
fs.readFile('text.txt', ()=>{
  console.log('I/O finished');
  setTimeout(()=>console.log("Timeout 2 finished!"),0);
  setTimeout(()=>console.log("Timeout 3 finished!"),3000);
  setImmediate(()=>console.log("Immediately 2 finished"));

  // căng phết vì libuv hoạt động ranh giới với JS
  process.nextTick(()=>console.log("Process.nextTick done!"));
})
console.log("Hello from the top-level code");