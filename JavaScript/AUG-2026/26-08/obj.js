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

obj.greet;
obj.greet();
console.log(obj.calAdd());