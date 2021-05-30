function cb(){
  console.log('Processed in next iteration');
}
process.nextTick(cb);
console.log('Processed in the first iteration');

for (var i = 0; i < 20000*20000; i++) {
    if(i == 0) {
        process.nextTick(function () {
            console.log(Math.sqrt(i))
        })
    }
}