//TODO import lib
const EventEmmiter = require('events');

//TODO  create instance inherit Node js events class
class Sales extends EventEmmiter {
  constructor() {
    super(); //* dùng super mới asset vô hết các method của abstract class
  }
}
//! const myEmitter = new EventEmmiter(); //! No more used
const myEmitter = new Sales();

//* Add listener
myEmitter.on('newSale', ()=>console.log('Thằng nào mới mua đồ'));
myEmitter.on('newSale', (tonKho,chiPhi)=>{
  console.log(tonKho);
  console.log(chiPhi);
})

//* Emitter emits event
myEmitter.emit('newSale',10000, '2020202 VND');