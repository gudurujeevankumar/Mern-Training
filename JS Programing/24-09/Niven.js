function Niven(num) {
  let copy = num;
  let sum = 0;
  while (copy > 0) {
    let last = copy % 10;
    sum += last;
    copy = Math.trunc(copy / 10);
  }

  return (num % sum === 0)
}


console.log(Niven(18));
