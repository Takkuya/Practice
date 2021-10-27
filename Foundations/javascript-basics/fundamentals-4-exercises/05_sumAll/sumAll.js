let arr = []
const sumAll = function (initialValue, finalValue) {
  //adding values to an empty array
  if (initialValue > finalValue) {
    for (let i = finalValue; i <= initialValue; i++) {
      arr.push(i)
    }
  } else if (
    initialValue < 0 ||
    finalValue < 0 ||
    typeof initialValue !== 'number' ||
    typeof finalValue !== 'number'
  ) {
    return 'ERROR'
  } else {
    for (let i = initialValue; i <= finalValue; i++) {
      arr.push(i)
    }
  }

  const sumAll = arr.reduce((initialValue, finalValue) => {
    if (initialValue > finalValue) {
      return (finalValue = finalValue + initialValue)
    } else {
      return (initialValue = initialValue + finalValue)
    }
  }, 0)

  arr = []
  return sumAll
}

// Do not edit below this line
module.exports = sumAll
