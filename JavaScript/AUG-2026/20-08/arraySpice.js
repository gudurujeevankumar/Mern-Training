let arr = [10,20,30,40,50,60];

console.log("This is original Array : ",arr)

let a = arr.splice(2,2,"Hello","Hai"); // starting index , no.of ele to remove , ele to add
console.log(arr);
console.log(a);


//add elements without removing

let arr1 = [1,2,3,4,5,6,7];

console.log(arr1);
let b = arr1.splice(2,0,"Hello",37,true);
console.log(arr1);
console.log(b);

//remove without adding
let arr2 = [7,5,4,3,2,1];
let c = arr2.splice(2,2);
console.log(arr2);
console.log(c);