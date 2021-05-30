let done = true;

const P = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built'
    resolve(workDone);
  } else {
    const why = 'Still working on something else'
    reject(why);
  }
});

Promise.all([P, P, P])
.then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })