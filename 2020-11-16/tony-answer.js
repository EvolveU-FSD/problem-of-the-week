// use string manipulate to "rewrite" the digits as a string
// then use "parseInt" to turn that string into a number
function arrayToNumber(array) {
  return parseInt(array.join('')) || 0
}

// encode a number as one of these arrays.
function numberToArray(number) {
  let result = []

  // deal with negative numbers by temporarily making them positive
  // doing this to avoid problems with the modulus operator
  let negative = number < 0
  if (negative) number = -number
  
  // insert one digit at a time using modulus to extract the digit
  // and division to shrink the number for the next loop
  while (number > 0) {
    result.splice(0,0,number%10)
    number = Math.floor(number / 10)
  }

  // flip negative numbers back to negative
  if (negative) result[0] = -result[0]

  return result
}

function addArrays(array1, array2) {
  let a = arrayToNumber(array1)
  let b = arrayToNumber(array2)
  return numberToArray(a + b);
}

module.exports = addArrays