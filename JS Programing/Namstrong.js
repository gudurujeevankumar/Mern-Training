function isAmstrong(n) {
  let power = countNo(n);
  let copy = n;
  let sum = 0;

  while (n > 0) {
    sum += (n % 10) ** power;
    n = Math.floor(n / 10);
  }
  return copy === sum
}

function countNo(n) {
  let count = 0;
  while (n > 0) {
    count++
    n = Math.trunc(n / 10);
  }
  return count;
}

let amstrNo = [];
for(let i = 1; i <= 1000; i++){
  isAmstrong(i) ? amstrNo.push(i) : ""
}
console.log(amstrNo);
