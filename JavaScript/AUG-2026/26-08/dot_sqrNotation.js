let obj = {
    name:'Priya Darshini',
    nick: 'Previ',
    address:{
        city:'Hyderabad',
        country:'Pakisthan'
    },
    skills:['Nothing','Sleeping','Eating','Roaming'],
    isGood: true,
    greet:()=>{
        console.log('Hello',obj.name);
    },
    calAdd:function(){
        console.log(obj.address);
    }
}

let inp = 'name';
console.log(obj.inp);
console.log(obj['address']);
console.log(obj[inp]);
