/*

Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
*/

// sol:

function isDivisible(n, x, y) {
    const result1 = n/x;
    const result2 = n/y;
    if (result1 % 1 === 0 && result2 % 1 === 0){
      return true;
    } else{
      return false;
    } 
  }