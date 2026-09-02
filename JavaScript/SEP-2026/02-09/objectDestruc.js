// object destructuring 


let s1 = { name: 'Priya', age: 24 }

let { name, age } = s1;

console.log(name);
console.log(age);


// default values

let { marks } = s1;
console.log(marks) // Undefined

let { remark = 'Good' } = s1;
console.log(remark); // we'll get Good as output even we don't have remark property in object

// asigning to new variable

let s2 = { sname: 'Jeevan', age: 23, course: 'MERN', city: 'Bangalore' };

let { sname: peru } = s2;
let { age: vayasu } = s2;

console.log(peru);
console.log(vayasu);

// by using rest parameter we can store multiple values

let { ...stu } = s2;
console.log(stu);

// Nested object destructuring
let emp = { 
    ename: "Kooli", 
    doj: '12-04-2014', 
    address : {
        city: 'ATP',
        state: 'AP'
    }
}

let {address:{city,state}} = emp
console.log(city);
console.log(state);

// function 
function main({ename,doj}){
    console.log(ename,doj);
}
main(emp)