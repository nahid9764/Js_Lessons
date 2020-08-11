

function closure() {
    let count = 0;
    return function innerFunction() {
        count++;
        return count;
    }
}
const plate = closure();
const plate2 = closure();
console.log(plate());
console.log(plate2());
console.log(plate2());
console.log(plate());
console.log(plate());
console.log(plate2());



