/*Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.*/

// sol :
var summation = function (num) {
    let sum = 0;
    for (let i = 1 ; i <= num ; i++ )
      {
        sum = sum +i;
      }
    return sum;
  }