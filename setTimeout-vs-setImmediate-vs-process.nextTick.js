setImmediate(() => console.log('setImmediate: I run immediately'))

setTimeout(() => console.log('setTimeout: I run after 0 seconds'), 0);

process.nextTick(() => console.log('Next Tick: But I run before that'))

console.log("Race starts now");