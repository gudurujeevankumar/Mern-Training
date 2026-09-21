function strong(n) {
  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return (sum == n);
}
let strongNo = [];
for(let j = 1; j <= 1000; j++){
  if(strong(j)){
    strongNo.push(j);
  }
}
