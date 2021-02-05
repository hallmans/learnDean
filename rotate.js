function rotate(ary) {
  var rary = [ary[ary.length - 1]];
  for (var i = 0; i < ary.length - 1; i++) {
    rary.push(ary[i]);
  }
  return rary;
}

var answer = ['Ashlyn', 'Matthew', 'Dean', 'Bree'];
console.log('Original array: ', answer);

answer = rotate(answer);
console.log('First rotate: ', answer);

answer = rotate(answer);
console.log('Second rotate: ', answer);
