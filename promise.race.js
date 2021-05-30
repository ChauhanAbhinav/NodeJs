let done = true;

const P1 = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built in P1'
    resolve(workDone);
  } else {
    const why = 'Still working on something else in P1'
    reject(why);
  }
});

const P2 = new Promise((resolve, reject) => {
    if (done) {
      const workDone = 'Here is the thing I built in P2'
      resolve(workDone);
    } else {
      const why = 'Still working on something else in P2'
      reject(why);
    }
  });

Promise.race([P1, P2])
.then(res => {
    console.log('Array of results', res)
  })
  .catch(err => {
    console.error(err)
  })