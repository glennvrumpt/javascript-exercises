const sumAll = function (num1, num2) {
  var sum = 0;
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isFinite(num1) ||
    !Number.isFinite(num2)
  ) {
    return "ERROR";
  } else {
    for (var i = Math.min(num1, num2); i <= Math.max(num1, num2); i++) {
      sum += i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
