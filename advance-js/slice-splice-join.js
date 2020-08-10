let num = [1, 2, 3, 4, 5, 6, 7, 8];
// Slice...
let sliceArray = num.slice(3, 5);
console.log('slice Array =',sliceArray);
console.log('num =',num);

//Splice... by this we can replace any element into main array 
let spliceArray = num.splice(3, 4, 898, 345, 77); 
console.log('splice Array =', spliceArray);
console.log("num =",num);

//Join... 
let joiningArray = num.join(' abc ');
console.log("join array =", joiningArray);


