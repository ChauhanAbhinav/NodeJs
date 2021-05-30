var i = 0;
function inc() {
  i++;
  inc();
}
    
try {
  inc();
}
catch(e) {
  console.log('Maximum stack size is', i, 'in your current browser/nodejs engine');
}
