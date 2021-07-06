/** EVENT DRIVEN ARCHITECT && OBSEVER PATTERN trong node
 * đối thủ: Không dùng simple function call other function 
 * 
 * Hết tất cả các bước sau đây gọi là observe pattern
 * myEmitter.on đang observe và waiting Instance emit một event tên newSale
 * myEmitter.emit('newSale')
*/

// import lib
const EventEmmiter = require('events');
// create instance inherit Node js events class
const myEmitter = new EventEmmiter();

// 1. setup Listener
myEmitter.on('newSale', ()=>{
  console.log('There was a new sale!');
});

myEmitter.on('newSale', ()=>console.log('Customer name: TongXin'));

// 2. emit an named event called newSale
myEmitter.emit('newSale');

