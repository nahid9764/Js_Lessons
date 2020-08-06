
function inchToFeet(inch){
    feet = inch/12;
    return feet;
}

// console.log(inchToFeet(49));

var myArray = [34,65,36,86,99,43];

for(i=0; i<myArray.length; i++){
    var result = inchToFeet(myArray[i]);
    console.log("Ans of your index "+i+ " = "+result);
}
console.log(myArray.length);