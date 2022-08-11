const ftoc = function (num) {
  temp = (num - 32) * 0.5556;
  return parseFloat(temp.toFixed(1));
};

const ctof = function (num) {
  temp = num * 1.8 + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
