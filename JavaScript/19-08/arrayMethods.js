let arr = [10,20,3,2231,323,1,-1];

//push
let pu = arr.push('pushed',[10,20]); // return updated array length
console.log(arr,pu);

//pop
let po = arr.pop(); // returns poped element
console.log(arr);
console.log('Poped Element is ',po);


//unshift - adds element at starting
console.log("unshift");

let un = arr.unshift('unshift');
console.log(arr);
console.log('Unshift returns',un);

//shift - removes element at starting
console.log("Shift");
let sh = arr.shift();
console.log(arr);
console.log("Shift returns ", sh);