let a = [1,'ramudu','priyaa',25,'monakam','jamakai'];

console.log('---- For Loop ------');
for(let i = 0; i < a.length; i++){
    console.log(`Index is : ${i} and Element is : ${a[i]}`);
}

console.log('---- For in Loop ------');
for (let ind in a){ //ind variable stores index values 
    console.log(`Index is : ${ind} and Element is : ${a[ind]}`);
}

console.log('---- For of Loop ------');
for(let val of a){ // here val variable stores values of array
    console.log(`Values are ${val}`);
}