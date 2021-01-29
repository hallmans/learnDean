var rightWay = false;

function callbackAfterDelay() {
  console.log('Event fired. Timeout Done.');
}

function scheduleCallback() {
  if (rightWay) {
    setTimeout(callbackAfterDelay, 2000);
  } else {
    var num = 0;
    while (num < 2000000000) {
      num = num + 1;
      if (num % 50000000 == 0) {
        //console.log('Counting...');
      }
    }
    callbackAfterDelay();
  }
}

console.log('START...');

scheduleCallback(); // 5 second delay

console.log('FINISH...');

/*
setTimeout(() => {
  console.log('Back from timeout #1');
  setTimeout(() => {
    console.log('Back from timeout #2');
    setTimeout(() => {
      console.log('Back from timeout #3');
    }, 2000);
  }, 2000);
}, 2000);

console.log('DONE');

*/
