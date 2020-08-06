var hasan = 60;
var rahman = 40;
var ikbal = 50;
// var result = Math.max(hasan, rahman, ikbal);
// console.log(result)

// if (hasan<rahman && rahman>ikbal){
//     console.log("Rahman is greater then other.")
// }else if(ikbal<hasan && hasan>rahman){
//     console.log("Hasan is greater then other")
// }
// else{
//     console.log("Ikbal is greater then other")
// }



// Finding max value from an Array:=

var marks = [34,565,75,544,786,97,97,77,543,676,];
var maxValue = marks[0];
for (i=0; i<marks.length; i++){
    var valueOfMarks = marks[i];
    if(valueOfMarks>maxValue){
        maxValue = valueOfMarks;
    }
}
console.log(maxValue);