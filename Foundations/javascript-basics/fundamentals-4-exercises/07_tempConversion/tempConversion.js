const ftoc = function (fahrenheitValue) {
  const convertedValue = (fahrenheitValue - 32) / 1.8
  const roundedValue = Math.round(convertedValue * 10) / 10
  return roundedValue
}

console.log(ftoc(100))

const ctof = function (celsiusValue) {
  const convertedValue = celsiusValue * 1.8 + 32
  const roundedValue = Math.round(convertedValue * 10) / 10
  return roundedValue
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
}
