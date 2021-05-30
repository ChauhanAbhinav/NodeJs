// Simple buffer
const buf = Buffer.from('Hey!')
console.log(buf);
console.log(buf.length);

// Alloc mwmory then write to it
const buf2 = Buffer.alloc(1024);
buf2.write('Hey!')
console.log(buf2);
console.log(buf2.length);

const buf3 = Buffer.allocUnsafe(1024);
console.log(buf3);
console.log(buf3.length);
