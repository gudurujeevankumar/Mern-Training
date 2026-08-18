let totalAmount = 2100;

let tran = [100,-200,500,-45,10];

for( let val of tran){
    console.log(`From ${totalAmount} the amount was ${val}`);
    totalAmount = totalAmount + val;
    console.log(`Then balance is ${totalAmount}`);

}

console.log(`The Remaining total amount is ${totalAmount}`);


let arr = [1,2,3,4,5,6,7,8,9,10];
let even = 0;
let odd = 0;

for( let val of arr){
    if (val % 2 == 0){
        even+=val;
    }
    else{
        odd+=val;
    }
}
console.log(`Even sum is : ${even}`);
console.log(`Odd sum is : ${odd}`);
