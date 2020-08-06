const num = [2,3,4,5,6];

// Analog style of using map();
// let result = num.map(function (){
//     return num * num;
// })

const result = num.map(b => b*b);

console.log(result);