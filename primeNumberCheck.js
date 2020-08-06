function primeNumber(n){
    for(i=2; i<n; i++){
       if(n%i == 0){
          return false;
       }
    }
    return true;
}

// Function for generate prime number series:
function primeSeries(n){
    var prime = [];
    
    var i = 2;
    while( i<=n){
       var result = primeNumber(i);
        if(result == true){
            prime.push(i);
        }
        i++;
    }
    return prime;
}

console.log(primeNumber(3));
console.log(primeSeries(50));







