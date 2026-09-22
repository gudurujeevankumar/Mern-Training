let a = 8;
let b = 12;

while(b !== 0){
  let rem = a % b;
  a = b;
  b = rem;
}

console.log(a);
