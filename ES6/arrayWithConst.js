// If we declared Array as const variable arrays element can be change but whole array can't change
const namesArray = ["nahid", 'hossain', 'ikbal'];
namesArray[0] = "rakib";
namesArray.push('nahid'); // even no matter if we use push and pop method also.

console.log("namesArray =",namesArray);

// namesArray = [0,46,67,3]; // we can't do that it'll give us error cause we are changing whole arrays type.

const obj = {name:'nahid', phn:0213, id:353432};  // it's also like array.
obj.name = "rakib";
console.log(obj);

// if we declared let into curly bracket {} than those variable are not accessible out of this bracket

for (let i=1; i<10; i++){
    // this "i" only accessible into this bracket;
}


// String Template:
const info = `i leave in bangladesh.
it's my home town.
i love it very much.`
console.log(info);

const fstNam = "ABC"
const lstNam = "Hossain"
const fullName = `${fstNam} ${lstNam} is a good boy.`
console.log(fullName);


