let done = true;

const P1 = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone);
  } else {
    const why = 'Still working on something else'
    reject(why);
  }
});

P1
.then((res)=>{
    console.log(res);
    return P1
})
.then((res)=>{
    console.log(res);
    return P1
})
.then((res)=>{
    console.log(res);
    return P1
})
.then((res)=>{
    console.log(res);
})
.catch((e)=>{
    console.log('Error: ', e);
})