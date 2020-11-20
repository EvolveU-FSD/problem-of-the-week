function convertArrayToNumber(array) {
    return (array.length > 0) ? parseInt(array.join("")) : 0;
}
  
function convertNumberToArray(total) {
    let negative = false; 
    let totalArray = []; 
  
    if (total < 0) { 
      total *= -1; 
      negative = true; 
    } 
    while (total > 0) {
      let digit = total % 10
      totalArray.push(digit); 
      total = (total - digit) / 10; 
      // total = Math.floor(total/10);
    } 
    totalArray = totalArray.reverse(); 
    if (negative) { 
      totalArray[0] *= -1; 
    } 
    if (!totalArray) { 
      totalArray.push(0); 
    }   
    return totalArray
  }
  
  function addArrays(array1, array2) { 
    let arrayToNumber1 = convertArrayToNumber(array1); 
    let arrayToNumber2 = convertArrayToNumber(array2);
    let total = arrayToNumber1 + arrayToNumber2;   
    return convertNumberToArray(total); 
  } 

  module.exports = addArrays