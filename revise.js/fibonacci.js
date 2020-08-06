// function fibonacci(fi){
//     var fib = [0,1];
//     for(i = 2; i<fi; i++){
//         var fib = fib[i-1]+fib[i-2];
//         fib.push(fib);
//     }
//     return fib;
// }
// console.log(fibonacci(5));

// // Recursive way :-
// function recursiveFib(fibo){
//     if(fibo == 0){
//         return 0;
//     }else if(fibo ==1){
//         return 1;
//     }else{
//         return result=(recursiveFib(fibo-1) + recursiveFib(fibo-2));
//     }
// }
// console.log(recursiveFib(5));


//fibonacci by using for loop:
function fibonacci(n){
    var fibo = [0,1];
    for(i = 2; i < n; i++){
        fibo[i] = fibo[fibo.length-1] + fibo[fibo.length-2];
    }
    return fibo;
}
console.log(fibonacci(15));

