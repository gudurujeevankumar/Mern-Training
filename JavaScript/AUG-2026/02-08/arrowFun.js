// Normal way of writing arrow function

s = () => {
    console.log("Hello");
}
s()

// single parameterized arrow function don't need paranthesis and curly bracess
b = a =>console.log(a*a);
b(5)

// multi parameterized arrow function with return 
cal = (a,b,c) => {
    return a*b+c
}

console.log(cal(10,20,30))