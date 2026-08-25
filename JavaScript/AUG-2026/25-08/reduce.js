let arr = [3, 5, 4, 6, 7]

let x = arr.reduce((acc,ele,ind,arrReff) => {
    console.log(acc,ele,ind,arrReff);
    return acc + ele;
}, 0)
console.log(x);

console.log("------------ Transactions -----------")


let transactions = [100,-300,500,-1000];

let availableAmount = 2500;

let finalAmount = transactions.reduce((acc,ele)=>{
    return acc + ele
},availableAmount)

console.log(finalAmount);
