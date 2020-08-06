function addingNumber(num){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const element = arguments[i];
        sum = sum+element;
    }
    console.log(arguments)
    return sum;
}

var total = addingNumber(10,23,30,40,50);
console.log(total);