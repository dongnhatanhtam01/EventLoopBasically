//* IMPORT module exported as function expression
const C = require('./Module-export-as-function');
const calculator_1 = new C();
console.log(calculator_1.add(2,5));
console.log(calculator_1.multiply(2,5));
console.log(calculator_1.devide(2,5));

//* IMPORT module exported as class
const anonymousClass = require('./Module-export-as-class');
const person = new anonymousClass();
// console.log(person._fyi());
person._fyi();

//* IMPORT module export as exports properties
const calc2 = require('./Module-export-as-export-properties')
console.log(calc2.add(1,2));

//* destructuring object
const {add, multiply, devide} = require('./Module-export-as-export-properties');
console.log(add(5,4));

//* Caching - the Hello from module ob
require('./Module-caching')();
require('./Module-caching')(); //! retrived from first time loaded and not loading again - cached
require('./Module-caching')();//! Nghĩa là các dòng sau chỉ lấy từ cached store đâu đó ra chứ không chạy lại