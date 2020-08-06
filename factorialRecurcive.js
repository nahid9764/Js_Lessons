function factorial(n){
    if(n==0){
        return n==1;
    }else{
        console.log(n);
        n= n * factorial(n-1); 
    }
}
(factorial(5));
