// Solve the addition, by doing one digit at a time!

// The caveat is negative numbers dont "add" nicely, so
// borrow the number representation that hardware uses.
// By converting a negative number to its 
// so called "tensComplement" then you can use regular
// addition to add positive and negative numbers.

function ninesComplement(value, negative) {
    return (negative) ? 9-value : value
}

function createRegisterFromArray(array, registerLength) {
    let register = new Array(registerLength)
    
    // clean out any bad values
    let digits = array.map((originalValue) => originalValue%10)

    let negative = (digits.length > 0) && (digits[0] < 0)
    if (negative) {
        // format register as "tens complement" if it is negative
        register.fill(9)
        digits[0] = -digits[0]
        digits.reverse()  // registers are least significant digit first
        digits.forEach((value, index) => {
            register[index] = ninesComplement(value, true)
        })    
        register[0] = register[0]+1 // tens complement
        register.push(-1) // plus -1 in the "sign bit"
    }
    else {
        // positive value looks just like the digit array
        register.fill(0)
        digits.reverse() // registers are least significant digit first
        digits.forEach((value, index) => {
            register[index] = value
        })
        register.push(0) // plus 0 in the "sign bit"
    }
    return register
}

function encodeRegisterAsArray(register) {
    let negative = register.pop() < 0  // extract the sign bit

    let values = register.map((value) => ninesComplement(value, negative))
    values.reverse()  // put values back to most significant first
    while (values[0] === 0) {
        // get rid of leading zeros
        values.shift()
    }
    if (negative) {
        values[0] = -values[0]  // mark negative 
        values[values.length-1]++ // undo tens complement
    }
    return values
}

function addArrays(a, b) {
    let length = Math.max(a.length, b.length)
    let registerA = createRegisterFromArray(a, length+1) // add an extra digit to catch overflow
    let registerB = createRegisterFromArray(b, length+1) // add an extra digit to catch overflow

    // add on digit at a time in the style of how we use pencil and paper
    let result = createRegisterFromArray([], length+1)    
    let carry = 0
    for (let i = 0; i < result.length; i++) {
        let sum = registerA[i] + registerB[i] + carry
        let nextDigit = sum % 10
        carry = Math.floor(sum/10)
        result[i] = nextDigit
    }
    return encodeRegisterAsArray(result)
}

module.exports = addArrays