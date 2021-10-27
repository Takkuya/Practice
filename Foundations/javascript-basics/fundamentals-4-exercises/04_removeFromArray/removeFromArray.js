const removeFromArray = function (arr, ...otherArguments) {
  otherArguments.filter((items) => {
    if (arr.includes(items)) {
      const index = arr.indexOf(items)
      arr.splice(index, 1)
      return arr
    } else {
      return 'Você caiu na pegadinha do seu Roberto do Mato'
    }
  })

  return arr
}
module.exports = removeFromArray
