const ftoc = function (f) {
  temp = (f - 32) * 0.5556;
  return parseFloat(temp.toFixed(1));
};

const ctof = function (c) {
  temp = c * 1.8 + 32;
  return parseFloat(temp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
