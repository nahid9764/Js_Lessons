// function factorial(facto){
//     var result;
//     if(facto == 1){
//         return 1;
//     }else{
//         result = facto*(factorial(facto-1))
//     }
//     return result;
// }

// console.log(factorial(4))


//Calculate factorial by recursive way:
function factorial(num){
    if(num == 1){
        return 1;
    }
   return result = num * factorial(num-1);
}
console.log(factorial(5));
