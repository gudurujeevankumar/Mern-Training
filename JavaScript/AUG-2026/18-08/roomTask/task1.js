// 1.⁠ ⁠Count Even and Odd Numbers
// find: const numbers = [12, 7, 8, 15, 20, 33, 40];
// Number of even elements
// Number of odd elements

const numbers = [12, 7, 8, 15, 20, 33, 40];
let evenCount = 0;
let oddCount = 0;

for(let val of numbers){
    if (val % 2 == 0){
        evenCount++;
    }
    else{
        oddCount++

    }
}
console.log("Even Count is ",evenCount);
console.log("Odd Count is ", oddCount);

// 2.⁠ ⁠Find Largest Number const numbers = [12, 45, 7, 89, 23];

const numbers1 = [12, 45, 7, 89, 23];
largeNum = 0;

for(let val of numbers1){
    if (val > largeNum){
        largeNum = val
    }
}
console.log("The largest number in array is ", largeNum);

// 3.⁠ ⁠Find Smallest Number: const numbers = [45, 12, 78, 5, 34];

const numbers2 = [45, 12, 78, 5, 34];
smallNum = numbers2[0];

for(let val of numbers2){
    if (val < smallNum){
        smallNum = val
    }
}

console.log("The small number in array is ", smallNum);

// another aprouch
// let small ;
// for(let index = 0; index < numbers2.length; index ++){
//     if(numbers2[index] < numbers2[index + 1]){
//         small = numbers2[index+1];
//         console.log(small);
//     }
// }
// console.log("Small number is ", small);

// 4.⁠ ⁠const marks = [80, 75, 90, 65, 85];
// Find the total marks.
// Find the average marks.

const marks = [80, 75, 90, 65, 85];
let sum = 0;
let avg = 0;

for(let mark of marks){
    sum +=mark
    avg = sum / marks.length
}
console.log(`Sum of digits is ${sum} and Avg is ${avg}`);



// 5.⁠ ⁠const numbers = [10, 25, 15, 40, 30, 5];
// Find the sum of numbers greater than 20.

    const numbers3 = [10, 25, 15, 40, 30, 5];
    greaterSum = 0;

    for(let val of numbers3){
        if(val > 20){
            greaterSum += val;
        }
    }
    console.log(`The sum of numbers greater than 20 is ${greaterSum}`);

// 6.⁠ ⁠const numbers = [15, 21, 33, 18, 24, 30];
// Using a loop, find the first even number.

const numbers4 = [15, 21, 33, 18, 24, 30];
let firstEven;
for (let val of numbers4){
    if(val%2 == 0){
        firstEven = val;
        break;
    }
}
console.log(`First even value is ${firstEven}`);

// 7.⁠ ⁠const numbers = [10, 45, 20, 89, 67];
// Using loops and without using sort(), find the second largest number.

const numbers5 = [10, 45, 20, 89, 67];
let fLarge = 1;
let sLarge = 0;

for(let val of numbers5){
    if(val > fLarge){
        fLarge = val;
    }
    else if (val > sLarge){
        sLarge = val;
    }
}
console.log(`First large is : ${fLarge}`)
console.log(`Second large is : ${sLarge}`)

