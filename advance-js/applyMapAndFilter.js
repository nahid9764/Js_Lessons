const stdList = [
    {id:12, name:'Ema'},
    {id:32, name:'Andrew'},
    {id:54, name:'John'},
    {id:61, name:'Ras'},
    {id:40, name:'David'},
];

// const names = [];

// for(i=0; i<stdList.length; i++){
//     const nam = stdList[i].name;
//     names.push(nam);
// }
const names = stdList.map(a => a.name);
console.log(names);

const filterName = stdList.filter(a => a.name.length > 3);
// console.log(filterName);

const newName = filterName.map(a => a.name);
console.log(newName);