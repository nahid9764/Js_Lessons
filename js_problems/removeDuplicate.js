var name = ["rahim",'karim',"jamal",'rahim',"joha","jamal"];
var nwArray = [];

for(i=0; i<name.length; i++){
    var element = nwArray.indexOf(name[i]);  
    if( element == -1){
        nwArray.push(name[i]);
    }
}
console.log(nwArray);
console.log(name)


// Fully remove duplicate element:
var num = [2,5,6,8,6,9,5,9,0,1,7,9,6];
var uniqueNum = [];
var duplicateNum =[];

//remove duplicate from num and store them into duplicateNum and uniqueNum
for(i = 0; i<num.length; i++){
    var index = uniqueNum.indexOf(num[i]);
    if(index == -1){
        uniqueNum.push(num[i]);
    }else{
        duplicateNum.push(num[i]);
    }
}
// Fully remove duplicateNum form UniqueNum
for(i = 0; i<duplicateNum.length; i++){
    var n = duplicateNum[i];
    
    for( var x = 0; x < uniqueNum.length; x++){ 
        if ( uniqueNum[x] === n) {
            uniqueNum.splice(x, 1); x--; 
            break;
        }
    }
}
console.log(uniqueNum);

