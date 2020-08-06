// Swaping value By Diclaring an extra var:-
var x = 5;
var y = 10;

var z = x;
// console.log("x =", x, " y =",y);

x = y;
// console.log("x =", x, " y =",y);

y = z;
// console.log("x =", x, " y =",y);

// Swaping value by Mixing with each other:-
var a = 20;
var b = 14;

a = a + b;
console.log("a =",a);

b = a - b;
console.log("b =",b);

a = a - b;
console.log("a =",a);

// Swaping value by an Array:=
var p = 50;
var q = 60;
[p,q] =[q,p];

console.log("p =",p);
console.log("q =",q);