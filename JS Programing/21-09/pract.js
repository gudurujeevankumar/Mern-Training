// 24. prinmt all factors

function fact(n){

for(i=1;i<=n;i++){
    if(n%i==0){
        console.log(i)
    }
}
}

fact(12)

// 25. number of factors to the given nimber

function numfact(n) {
    let count = 0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            count++
        }
    }
    console.log(count)
}

numfact(12)

// 26. sum of factors of a given number

function sumfact(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        if (n % i == 0) {
            sum+=i
        }
    }
    console.log(sum)
}

sumfact(12)


// 27. HCF/GCD of two numbers


function GCD(a, b) {
    let arr1 = [];
    let arr2 = [];

    for (i = 1; i <= a; i++) {
        if (a % i == 0) {
            arr1.push(i)
        }
    }

    for (j = 1; j <= b; j++) {
        if (b % j == 0) {
            arr2.push(j)
        }
    }


    let common = arr1.filter((ele)=>{
        if(arr2.includes(ele)){
            return ele
        }
    })
    console.log(common[common.length-1])

}

GCD(12,18)





function gcd(a, b) {
    let gcd = 1;

    for (let i = 1; i <= a && i <= b; i++) {
        if (a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }

    return gcd;
}

console.log(gcd(12, 18));



// 28. LCM of two numbers

function LCM(a, b) {
    let max;

    if (a > b) {
        max = a;
    } else {
        max = b;
    }

    while (true) {
        if (max % a == 0 && max % b == 0) {
            console.log(max);
            break;
        }

        max++;
    }
}

LCM(12, 18);


// 29. larges digit in given number

function large(n){
    let larger=0;

   while(n!=0){
    let digit=n%10
    if(digit>larger){
        larger=digit
    }
    n=Math.floor(n/10)
   }

   console.log(larger)
}
large(3489546)


// 30. smallest digit present in the give number

function small(n){
    let smaller=9;

   while(n!=0){
    let digit=n%10
    if(digit<smaller){
        smaller=digit
    }
    n=Math.floor(n/10)
   }

   console.log(smaller)
}
small(13489546)


// 31 . sum of even numbers present in given number

function evensum(n){
    let evendigitsum=0;

   while(n!=0){
    let digit=n%10
    if(digit%2==0){
        evendigitsum+=digit
    }
    n=Math.floor(n/10)
   }

   console.log(evendigitsum)
}
evensum(1348)

// 32 . sum of odd numbers present in given number

function oddsum(n){
    let odddigitsum=0;

   while(n!=0){
    let digit=n%10
    if(digit%2!=0){
        odddigitsum+=digit
    }
    n=Math.floor(n/10)
   }

   console.log(odddigitsum)
}
oddsum(1348)
