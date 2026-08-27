let a = ['apple','orange','banana',true,10,10.55,'zero'];
a.sort

console.log(a);

let b = [40,30,3,4,23,4322,45];
// b.sort();
b.sort((a,b)=> a-b); // accending order

console.log(b)

b.sort((a,b)=>b-a); // decending order
console.log(b);
