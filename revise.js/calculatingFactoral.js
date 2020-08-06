function factorial(fac){
    var facto = 1;
    for (i= 1; i<=fac; i++){
        facto = facto*i
    }
    return facto;
}
console.log(factorial(4));


// Using While Loop :-
function whFactorial(fac){
    var facto = 0; 
    var i = 1;
    while(i<=fac){
        facto = facto+i;
        i++
    }
    return facto;
}
console.log(whFactorial(4));