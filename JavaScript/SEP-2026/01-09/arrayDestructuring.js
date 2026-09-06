let arr = [1,2,3,4,5,6,7];

let [a1,a2,a3,...a] = arr;
console.log(a1,a2,a3,a);

console.log(a);
console.log("_________________");

let brr = [10,30,24,45];
console.log(brr)
let [b1,,b3,...b] = brr;

console.log(b1,b3,b);


//default value

let [x1,x2=3] = [12]

console.log(x1,x2);

console.log("_________________");


//swapping 

let s = 10;
let t = 20;

console.log("Before" , s,t);

[t,s] = [s,t];
console.log("After",s,t)


//function destructuring

function fun([a,b]){
    console.log(a,b);
}

let d = [70,34]
// fun(d[0],d[1]);
fun(d);

let g = ['hello','Bacheh !'];
fun(g);

