const repeatString = function (string, num) {
  if (num >= 0) {
    for (let i = 1; i <= 5; i++) {
      return string.repeat(num)
    }
  } else {
    return 'ERROR'
  }
}

// Do not edit below this line
module.exports = repeatString
