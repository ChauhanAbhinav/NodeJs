var i = 0;
function inc() {
  i++;
  if(i <= 15709) { // After 15709 it will return error of max callstack size
    inc();
  }
}

inc();

