//Spread Operator: "..."
const array = [3,5,6,7];
const array2 = [4,8,9];
const newArray = array.concat([2]).concat(array2); // old way to concat;
    console.log(newArray);

const concatUsingOperator = [...array,5,...array2];
    console.log('concat using operator = ',concatUsingOperator);

const maxNumber = Math.max(array); // it'll give an error;
    console.log(maxNumber);

const maxNumber2 = Math.max(...array2);
    console.log("max value =",maxNumber2);