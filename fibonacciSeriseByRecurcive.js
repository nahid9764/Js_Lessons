// function fibonacciSeries(n){
//     if(n  == 0){
//         return [0];
//     }else if(n == 1){
//         return [0,1];
//     }else{
//         var fibo = fibonacciSeries(n-1);
//         var newElement = fibo[n-1] + fibo[n-2];
//         fibo.push(newElement);
//         return fibo;
//     }
// }
// console.log(fibonacciSeries(10));

function fiboSeries(n){
    if (n == 0){
        return [0];
    } else if(n == 1){
        return [0,1];
    } else {
        var fibo = fiboSeries(n-1);
        var nextElement = fibo[n-1] + fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}

console.log (fiboSeries(10));