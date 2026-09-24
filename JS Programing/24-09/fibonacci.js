n = 10;

let arr = [0,1];
while((arr.length) < n){
  arr.push(arr.at(-2) + arr.at(-1));
}

console.log(arr);

