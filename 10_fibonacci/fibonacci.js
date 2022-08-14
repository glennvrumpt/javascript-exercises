const fibonacci = function (count) {
  let a = 0;
  let b = 1;
  if (count < 0) {
    return 'OOPS';
  } else {
    for (let i = 1; i < count; i++) {
      let temp = b;
      b = a + b;
      a = temp;
    }
    return b;
  }
};

// Do not edit below this line
module.exports = fibonacci;
