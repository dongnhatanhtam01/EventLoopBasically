// import lib
const EventEmmiter = require('events');
// create instance inherit Node js events class
const myEmitter = new EventEmmiter();

// 1. setup Listener
myEmitter.on('newSale', ()=>{
  console.log('There was a new sale!');
});

myEmitter.on('newSale', ()=>console.log('Customer name: TongXin'));

// example more arguments emmited
myEmitter.on('newSale', (a, b)=> {
  console.log(a);
  console.log(b);
})

// 2. emit an named event called newSale
myEmitter.emit('newSale',10000, 2020202);

