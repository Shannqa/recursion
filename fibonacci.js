/* Fobonacci in an array - iteration */

function fibs(n) {
  let a = 0;
  let b = 1;
  let array = [a, b];
  let c;
  for (let i = 2; i <= n; i++) {
    c = a + b;
    array.push(c);
    a = b;
    b = c;
  }
  console.log(array);
}

fibs(7);

/* Fibonacci in an array -recursion */

function fibsRec (n) {
  if (n <= 1) return [0, 1];
  let array = fibsRec(n - 1);
  array.push(array[array.length - 1] + array[array.length - 2]);
  // fibsRec(n - 1) + fibsRec(n - 2);
    return array;
}

console.log(fibsRec(15));
