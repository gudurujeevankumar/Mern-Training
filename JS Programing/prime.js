// function primeOrNot(n){
//   let pCount = 0;
//   for(let i = 1; i <= n; i++){
//     if(n % i == 0){
//       pCount++
//     }
//     if(pCount > 2){
//       console.log(`${n} is not a prime number because it has ${pCount} factors`);
//       break;
//     }
//   }
//   if(pCount <= 2) {
//     console.log(`${n} is a prime number because it has ${pCount} factors`);
//   }
// }

// primeOrNot(21);


function isPrime(n){
  for(let i = 2 ; i <= Math.floor(n/2);i++){
    if(n % i == 0){
      return false;
    }
    else{
      return true;
    }
  }
}

if(isPrime(7)){
  console.log("Prime")
}
else{
  console.log("Not Prime");
}
