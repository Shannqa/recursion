/* https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion */

/* Question 1: Sum all numbers
Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.

Sample: sumRange(3) returns 6, since 1 + 2 + 3 = 6. */

function sumRange(n) {
  if (n == 1) return 1;
  return n + sumRange(n - 1);
}
console.log(sumRange(23));

/* Question 2: Power function
Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.

Sample:

console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1 */

function power(num1, num2) {
  if (num2 == 0) return 1;
  return num1 * power(num1, num2 - 1);
}

console.log(power(2, 4));

/* Question 3: Calculate factorial
Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.

Sample:

factorial(5); // 5 * 4 * 3 * 2 * 1 === 120 */

function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/* Question 4: Check all values in an array
Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

Sample:
var allAreLessThanSeven = all([1,2,9], function(num){
	return num < 7;
});

console.log(allAreLessThanSeven); // false */

let lessThanSeven = all([0, 2, 6, 4, 5, 1], function (num) {
  return num < 7;
});

function all(array, func) {
  var copy = copy || array.slice();
  if (copy.length === 0) {
    return true;
  } else if (func(copy[0])) {
    copy.shift();
    return all(copy, func);
  } else {
    return false;
  } 
}

console.log(lessThanSeven);

/* Question 5: Product of an array
Write a function called productOfArray which takes in an array of numbers and returns the product of them all

Sample:

var six = productOfArray([1,2,3]) // 6
var sixty = productOfArray([1,2,3,10]) // 60*/

var six = [1,2,3];
var sixty = [1,2,3,10];

function productOfArray(array) {
  var copy = copy || array.slice();
  if (copy.length == 0) return 1;
  
  return copy.shift() * productOfArray(copy);
}
console.log(productOfArray(sixty));

/* Question 6: Search JS object
Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

Sample:

let hasIt = contains(nestedObject, 44); // true
let doesntHaveIt = contains(nestedObject, "foo"); // false
*/

var nestedObject = {
    data: {
        info: {
            stuff: {
                thing: {
                    moreStuff: {
                        magicNumber: 44,
                        something: 'foo2'
                    }
                }
            }
        }
    }
}
function contains(object, item) {
  for (let key in object) {
    if (typeof object[key] == "object") {
      return contains(object[key], item);
    }
    if (object[key] == item) {
      return true;
    }
  }
  return false;
}

console.log(contains(nestedObject, 44));
console.log(contains(nestedObject, "foo"));

/* Question 7: Parse a multi-dimensional array
Given a multi-dimensional integer array, return the total number of integers stored inside this array

Sample:

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7 */

var seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7 

function totalIntegers(array) {
  if (array.length == 0) return 0;
  let total = 0;
  let first = array.shift();
  if (Array.isArray(first)) { 
    total += totalIntegers(first);
  } else if (Number.isInteger(first)) {
    total += 1;
  }
  return total + totalIntegers(array);
}

console.log(seven);

/* Question 8:
Write a function that sums squares of numbers in list that may contain more lists

Sample:
var l = [1,2,3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[1,2],3]; 
console.log(SumSquares(l)); // 1 + 4 + 9 = 14

l = [[[[[[[[[1]]]]]]]]] 
console.log(SumSquares(l)); // 1 = 1

l = [10,[[10],10],[10]] 
console.log(SumSquares(l)); // 100 + 100 + 100 + 100 = 400*/

function sumSquares(array) {
  if (array.length == 0) return 0;
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      total += sumSquares(array[i]);
    } else {
      total += array[i] * array[i];
    }
  }
  return total;
}

var one = [1,2,3]; 
var two = [[1,2],3]; 
var three = [[[[[[[[[1]]]]]]]]];
var four = [10,[[10],10],[10]];


console.log(sumSquares(one));
console.log(sumSquares(two));
console.log(sumSquares(three));
console.log(sumSquares(four));

/* Question 9:
The function should return an array containing repetitions of the number argument. For instance, replicate(3, 5) should return [5,5,5]. If the times argument is negative, return an empty array.

Sample:

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // [] */

function replicate(times, number) {
  if (times <= 0) return [];
  return [number].concat(replicate(times - 1, number));
}

console.log(replicate(3, 5)) // [5, 5, 5]
console.log(replicate(1, 69)) // [69]
console.log(replicate(-2, 6)) // [] */
