function inchToFeet (x){
    var result = x/12;
    return result.toFixed(3);
}
function feetToInch (x){
    var result = x*12;
    return result.toFixed(3);
}
console.log(feetToInch(2.3),"Inch");
console.log(inchToFeet(32),"Feet")