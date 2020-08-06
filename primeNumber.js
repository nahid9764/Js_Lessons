function primeCheck(n){
    for (i=2; i<n; i++){
        if(n%i==0){
            return "Not a Prime number"
        }
        console.log(i);
    }
    return "It's a Prime number"
}
console.log(primeCheck(77));
