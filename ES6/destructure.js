//destructuring obj:
const person = {
    name : "Ema",
    age: 21,
    phoneNumber: 9034653345,
    address: "Ontario; Canada",
    friend:['Johan',"Frisel","Loren"],
    occupation :"Job holder",
}
        // we can access objects element by this method:
const {name,age,occupation,...remain} = person;  // this "..." is creating another object;
console.log(name,occupation,age,remain);


// we also can destructuring arrays element:
const friends = ["Amir","Ajay", "Salman","Rames"];
const [frsName, nxtFr] = friends;
console.log(frsName,nxtFr);



/// you can also destructing nesting array:
const man = {
    name : "Ana",
    age: 22,
    phoneNumber: 9034653345,
    friendsDetail:{
            name : "Ema",
            age: 21,
            phoneNumber: 9034653345,
            address: "Ontario; Canada",
            friendsInfo:{
                name: "Whatson",
                id: 324034,
            },
            occupation :"Job holder",   
    },
    occupation :"Job holder",
    address: "Ontario; USA",
}

const {id} = man.friendsDetail.friendsInfo;
console.log(id);
