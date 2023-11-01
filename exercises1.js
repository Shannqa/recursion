/*
Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

For instance:
sumTo(1) = 1
sumTo(2) = 2 + 1 = 3
sumTo(3) = 3 + 2 + 1 = 6
sumTo(4) = 4 + 3 + 2 + 1 = 10
...
sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

Make 3 solution variants:

Using a for loop.
Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
Using the arithmetic progression formula.
*/

// iterate, for loop
function sumToIteration(n) {
  let result = 0;
  for (let i = 1; i <= n ; i++) {
    result += i;
  }
  return result;
}

console.log(sumToIteration(10));

// recursion
function sumToRecursion(n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sumToRecursion(n-1);
  }
}

console.log(sumToRecursion(10));

function sumToProgression(n) {
  let result;
  result = (1 + n) / 2 * n;
  return result;
}

console.log(sumToProgression(10)); 

/*
The task is to write a function factorial(n) that calculates n! using recursive calls.

alert( factorial(5) ); // 120
P.S. Hint: n! can be written as n * (n-1)! For instance: 3! = 3*2! = 3*2*1! = 6
*/
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5));

/* 
The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.
Write a function fib(n) that returns the n-th Fibonacci number.
*/
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7));

/* faster, no big stack */
function fibonacci2(n) {
  let a = 1; 
  let b = 1; 
  
  for (let i = 3; i <= n; i++) {
    let c = a + b; 
    a = b; 
    b = c; 
  }
  return b;
}

console.log(fibonacci2(7));

/* Let’s say we have a single-linked list (as described in the chapter Recursion and stack): 
Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

function linkedListLoop() {
  let obj = list;
  
  while (obj) {
    console.log(obj.value);
    obj = obj.next;
  }
}

linkedListLoop() 

function linkedListRecursion(obj) {
  console.log(obj.value);
  if (obj.next) linkedListRecursion(obj.next);
}

linkedListRecursion(list);

/*Output a single-linked list from the previous task Output a single-linked list in the reverse order.

Make two solutions: using a loop and using a recursion.

*/

function reverseLoop() {
  let obj = list;
  let arr = [];
  
  while (obj) {
    arr.push(obj.value);
    obj = obj.next;
  }
  console.log(arr);
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

reverseLoop();

function reverseRecursion(obj) {
  if (obj.next) {
    reverseRecursion(obj.next);
  }
  console.log(obj.value);
}

reverseRecursion(list);

