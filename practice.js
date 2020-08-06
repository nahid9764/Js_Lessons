// Factorial 
// function factorial(n){
//     facto = 1;
//     for (i=1; i<=n; i++){
//         facto = facto*i;
//     }
//     return facto;
// }
// console.log(factorial(5));

// Factoiral by Recurcive method:-

// function factorial(n){
//     if(n==1){
//         return 1;
//     }
//     else{
//         n = n*factorial(n-1);
//     }
//     return n
// }
// console.log(factorial(4));

//Fibonacci By Iteration:-

// function fibonacciSerice(n){
//     var fibo =[0,1];
//     for (i=2; i<=n; i++){
//         fibo[i]= fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }
// console.log(fibonacciSerice(16));

/***FibonacciSerice By Recercive Method:-

.........
.........
.........
.........
....................................*/

//Laep Year :-

function leapYearCheak(n){
    if(n % 4 == 0 && (n % 400 != 0 && n % 100 != 0)){
        console.log("This is a Leap Year.");
    }else{
        console.log("This not a Leap Year.");
    }
}
leapYearCheak(1900);
