//Default parameter:
function sum(num1, num2 = 10){
    // num2 = num2 || 10;
    return num1 + num2;
}
result = sum(5,);
console.log(result);


//Arrow function :
 const noPara = () => "it has no parameter" // without parameter;
 const double = num => num*2;              //single parameter function;
 const add = (a,b) => a+b;                // multiple parameter function;
 const bisalFunction = (a, b, c = 1) => {
    let d = a*b;
    let e = b*c;
    let f = d+e;
    return f; // we have to use "return" manually for multi line function; 
 }
console.log(bisalFunction(3,4))
