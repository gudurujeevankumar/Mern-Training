// let obj1 = {
//     id:'A101',
//     name:'Jeevan Kumar',
//     role:'Dev'
// }

// let obj2 = Object.assign({},obj1);

// console.log(obj1);
// console.log(obj2);

// obj1['role'] = 'GM'
// obj2.role = 'Manager';

// console.log(obj1);
// console.log(obj2);


let emp = {
    id: '22A',
    name: 'Ramesh',
}

console.log(emp);

let role = {
    team: 'A',
    Designation: 'Front End'
}

let address = {
    dist: 'ATP',
    state: 'AP',
}

Object.assign(emp,role,address);

console.log(emp);