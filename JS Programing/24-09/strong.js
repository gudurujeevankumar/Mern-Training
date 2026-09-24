function strong(n){
  let copy = n;
  let sum = 0;

  while (n > 0) {
    let last = n % 10;
    sum += fact(last);
    n = Math.trunc(n / 10);
  }

  function fact(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
      fact = fact * i;
    }
    return fact;
  }

  return copy == sum
}

console.log(strong(145));


