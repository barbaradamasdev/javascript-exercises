const convertToCelsius = function(num) {
  let x = (num-32)*0.5556;
  return Math.round(((num-32)*0.5556)*10) / 10;
};

const convertToFahrenheit = function(num) {
  let y = Math.round(((num*1.8)+32)*10)/10;
  return y;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
