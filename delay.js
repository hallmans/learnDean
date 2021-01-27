function delay(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('DELAYED FOR ' + duration + ' milliseconds');
    }, duration);
  });
}
console.log('Delaying 2');
delay(2000).then((duration) => {
  console.log('Completed delay for ', duration);
});
