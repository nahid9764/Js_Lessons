//swap variable:-
// let x = 10;
// let y = 20;
//first easy method
// [x,y] = [y,x];
// console.log("x=",x,'y=',y)
//  another method
// x = x+y;
// y = x-y;
// x = x-y;
// console.log('x=',x, 'y=',y);
//  another method
// let z = x;
// x = y;
// y = z;
//  console.log('x=',x, 'y=',y);

// Generating Random Number from 15 to 20:-
// for(i = 1; i<=10; i++){
//     var randomNum = (Math.random()*5)+15;
//     console.log(Math.round(randomNum));
// }

// Finding Max value:-
// var x=20;
// var y=50;
// var z=40;
// if(y<x && x>z){
//     console.log("x is greater than other.");
// }else if(x<y && y>z){
//     console.log("y is greater than other.");
// }else{
//     console.log("z is greater than other.");
// }
// Another way :-
// var maxValue = Math.max(x,y,z);
// console.log(maxValue);

// Finding max from an Array:=
// function maxArrayValue(x){
//     var mxAryVlu = [0];
//     for (i=0; i<x.length; i++){
//         if(mxAryVlu < x[i]){
//           mxAryVlu = x[i];
//         }  
//     }
//     return mxAryVlu;
// }
// var ary= [23,54,65,76,45,77,87,34,55];
// console.log(maxArrayValue(ary));
// //Very short form from Stack over flow:
// let maximum = array.sort((a, b) => b - a)[0];


//Remove Duplicate item from an Array:
let item = ["hasan", "kamal", 'Hasan', "jamal","kamal","rasel"];
function removeDuplicate(x){
    let frestItem =[];
    for (i=0; i<x.length; i++){
        if( frestItem.indexOf(x[i])== -1 ){
            frestItem.push(x[i]);
        }
    }
    return frestItem;
}
console.log(removeDuplicate(item));