
var txt = "I     leave in dhaka Bangladesh."
var count = 0;
for(i=0; i<txt.length; i++){
    if(txt[i] != " "){
        count++
    }
}
console.log(count);


// Word Count Method:=
var txt = "I     leave in dhaka Bangladesh."
var countSpace = 0;
for(i=0; i<txt.length; i++){
    if(txt[i] == " " && txt[i-1] != 0){
        countSpace++
    }
}
count++;
console.log(countSpace);
