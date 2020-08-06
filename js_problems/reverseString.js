
function reverseString(text){
    var reverse = "";
    for(i = 0; i<text.length; i++){
        reverse = text[i] + reverse;
    }
    return reverse;
}
console.log(reverseString('farhana eva'));

