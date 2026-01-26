const fibs = (num) => {
  let arr = [];
  for (let a = 0, b = 1; arr.length < num; ) {
    arr.push(a);
    [a, b] = [b, a + b];
    // console.log(arr);
  }
  return arr;
};

const fibsRec = (num) => {
  console.log("This was calculated recursively");

  if (num === 1) return [0];
  if (num === 2) return [0, 1];

  const prev = fibsRec(num - 1);
  const next = prev[prev.length - 1] + prev[prev.length - 2];

  return [...prev, next];
};

const mergeSort = (arr) => {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);

  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  const merge = (l, r) => {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < l.length && j < r.length) {
      if (l[i] <= r[j]) {
        result.push(l[i]);
        i++;
      } else {
        result.push(r[j]);
        j++;
      }
    }
    return result.concat(l.slice(i)).concat(r.slice(j));
  };

  return merge(left, right);
};

console.log(fibs(8));
console.log(fibsRec(8));

console.log(mergeSort([105, 79, 100, 110]));
