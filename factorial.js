
function factorialOf(num){
    var factorial = 1;
    for (i= 1; i<=num; i++){
        factorial = factorial*i ;
    }
    return factorial;
}
console.log(factorialOf(10));