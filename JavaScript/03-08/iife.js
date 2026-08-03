// IIFE - Immediete Invoke Function Expression

(
    ()=> console.log("Hello")
)();

(
    function sum(){
        console.log("IIFE function declaration")
    }
)();

(
    function (){
        console.log("Anonymous function in IIFE")
    }
());
