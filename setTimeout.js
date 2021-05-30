console.log('Processed in the first iteration');
setTimeout(function () {
    console.log('Processed in the next iteration');
}, 0)
for (var i = 0; i < 20000*20000; i++) {
    if(i == 0) {
        setTimeout(function () {
            console.log(Math.sqrt(i))
        }, 0)
    }
  }