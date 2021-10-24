/*
Write a function called add7 that takes one number and returns that number + 7.
Write a function called multiply that takes 2 numbers and returns their product.
Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
Write a function called lastLetter that takes a string and returns the very last letter of that string:
lastLetter("abcd") should return "d"
*/

//Write a function called add7 that takes one number and returns that number + 7.
function add7(number) {
  return number + 7
}

console.log('A função add7 retorna:', add7(7))

//Write a function called multiply that takes 2 numbers and returns their product.
function multiply(number1, number2) {
  return number1 * number2
}

console.log('A função multiply retorna:', multiply(2, 2))

//Write a function called capitalize that takes a string and returns that string with only the first letter capitalized. Make sure that it can take strings that are lowercase, UPPERCASE or BoTh.
function capitalize(string) {
  return string.slice(0, 1).toUpperCase()
}

console.log('A função capitalize retorna:', capitalize('jorge'))

//Write a function called lastLetter that takes a string and returns the very last letter of that string: lastLetter("abcd") should return "d"
function lastLetter(string) {
  return string.slice(-1)
}

console.log('A função lastLetter retorna:', lastLetter('abcd'))
