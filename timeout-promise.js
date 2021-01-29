// Producer Side of Promise /////
function promisedDelay(duration) {
  return new Promise((resolve, reject) => {
    if (duration < 0) {
      reject("Can't sleep for negative time");
    } else {
      setTimeout(() => {
        resolve('hello', 'world');
      }, duration);
    }
  });
}

// Consumer Side of Promise /////
promisedDelay(4000)
  .then(() => {
    console.log(' >>>> Promised Delay DONE!!');
  })
  .catch((error) => {
    console.log('  >>>> ERROR!!!', error);
  });

console.log('START...');

console.log('FINISH...');
