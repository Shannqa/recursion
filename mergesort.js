let array = [7, 3, 0, 9, 1, 6, 2, 4, 5];

function merge(left, right) {
  let sorted = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  return [...sorted, ...left, ...right];
}

function mergesort(arr) {
  if (arr.length <= 1) return arr;
  
  let left = mergesort(arr.slice(0, arr.length / 2+ arr.length % 2));
  let right = mergesort(arr.slice(-arr.length / 2));
  
  return merge(left, right);
}

console.log(mergesort(array));
