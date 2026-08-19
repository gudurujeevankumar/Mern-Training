// 1. Stack Simulation

// Create:

// let stack = [];

// Perform:

// push 10
// push 20
// push 30
// pop
// push 40
// pop

// Print the final stack.

    let stack = [];
    stack.push(10);
    stack.push(20);
    stack.push(30);
    stack.pop();
    stack.push(40);
    stack.pop();

    console.log(stack);

// 2. Queue Simulation

// Create:

// let queue = [];

// Perform:

// Add Rahul
// Add Priya
// Add Arun
// Remove first person
// Add Sneha
// Remove first person

// Use only:

// push()
// shift()

// Print the final queue.

    let queue = [];
    queue.push("Rahul");
    queue.push("Priya");
    queue.push("Arun");
    queue.shift();
    queue.push("Sneha");
    queue.shift();

    console.log(queue);

// 3. Extract First Three Elements

// Given:

// let numbers = [10, 20, 30, 40, 50, 60];

    let num = [10, 20, 30, 40, 50, 60];
    console.log(num.slice(0,3));

// 4. Extract Last Three Elements

// Given:

// let numbers = [10, 20, 30, 40, 50, 60];

    let numbers = [10, 20, 30, 40, 50, 60];
    console.log(numbers.slice(-3));

// 5. Get First Half

// Given:

// let numbers = [10, 20, 30, 40, 50, 60];

    let n = [10, 20, 30, 40, 50, 60];
    console.log(n.slice(0,n.length/2));

// 6. Process Employee Names

// Given:

// let employees = ["Rahul", "Priya", "Arun", "Sneha", "Kiran"];

// Perform:

// Add "Vijay" at the end.
// Add "Anu" at the beginning.
// Remove the last employee.
// Remove the first employee.
// Print all employees using for...of

    let employees = ["Rahul", "Priya", "Arun", "Sneha", "Kiran"];

    employees.push("Vijay");
    employees.unshift("Anu");
    employees.pop();
    employees.shift();

    for(let employee of employees){
        console.log(employee);
    }

// 7. Array Manipulation Challenge

// Given:

// let numbers = [10, 20, 30, 40, 50];

// Perform:

// 1. Add 60 at the end
// 2. Add 5 at the beginning
// 3. Remove the last element
// 4. Remove the first element
// 5. Extract the middle 3 elements using slice()
// 6. Print the final array using for...of

    let numb = [10, 20, 30, 40, 50];
    numb.push(60);
    numb.unshift(5);
    numb.pop();
    numb.shift();

    let middle3 = numb.slice((numb.length)/2-1,(numb.length)/2+2);
    console.log("Middle 3 elements are ", middle3);

// 8. Marks Analysis

// Given:

// let marks = [85, 72, 91, 65, 48, 78, 95];

// Find:

// Total marks
// Average marks
// Highest mark
// Lowest mark
// Number of students who scored above 75
// Number of students who failed (< 40)

// Restriction: Use loops only.

let marks = [85, 72, 91, 65, 48, 78, 95];

let sum = 0;
for( let mark of marks){
    sum += mark;
}

console.log("Array marks is : ",marks);
console.log("Sum of all marks are ",sum);
console.log("Average marks :", Math.trunc(sum/marks.length));

let high = 0;
let low = marks[0];
for(let e of marks){
    if (e > high){
        high = e;
    }
    else if (e < low){
        low = e
    }
}
console.log("The Highest value is :",high);
console.log("The Lowestst value is :",low);

let tCount=0;
let fCount=0;
for(let m of marks){
    if(m > 75){
        tCount++
    }
    else if (m < 40){
        fCount++
    }
}
console.log(`There are ${tCount} memebers got more than 75`);
console.log(`There are ${fCount} members are failed and got below (40)`);


