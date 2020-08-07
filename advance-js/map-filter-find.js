const num = [2,3,4,5,6];

// Analog style of using map();
// let result = num.map(function (num){
//     return num * num;
// })

 const result = num.map(b => b*b);
console.log(result);

// We can pass three parameter into map those are (element, index, array);

const result2 = num.filter(b => b % 2 !== 0 );
console.log(result2);

const result3 = num.find(b => b%2 === 0);
console.log(result3);
