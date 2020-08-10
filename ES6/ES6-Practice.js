// Template String:
const nm1 = "Monika";
const nm2 = "Farha";
const str = `${nm1}: hello..! ${nm2}?
${nm2}: Hey.. ${nm1}? How are you?
${nm1}: I m fine, how u doing?`
// console.log(str);


//Arrow Function:
const myFn = (nm) => nm * 2;
const result = myFn(3);
// console.log(result);


// Spread Operator(...): 
const array1 = [1, 2, 3, 4];
const array2 = [5, 6, 7, 8, 9];
const maximum = Math.max(...array1, ...array2);
// console.log(maximum);
const array3 = [...array1, ...array2];
// console.log(array3);


// Class Constructor:
class Student{
    constructor(id, name, address) {
        this.SchoolName = "GMC" 
        this.sId = id;
        this.sName = name;
        this.sAdd = address;
    }
}
const std1 = new Student(232, 'Adam', 'South-Caroline');
const std2 = new Student(453, 'Ema', 'Washington');
// console.log(std1);
// console.log(std2);


// Inheritance:
class Parent {
    constructor() {
        this.parentName =  "Martin";
        this.parentAdds = "California";
    }
}
class Child extends Parent {
    constructor(name) {
        super();
        this.childName = name;
    }
    getFullName() {
        return ` Full Name : ${this.childName} ${this.parentName}
    Address: ${this.parentAdds}`
    }
}
const child1 = new Child("Akbar");
const child2 = new Child("Adam");
// console.log(child1.getFullName());
// console.log(child2);


//  Object Destructure:
const person = {
    name: "Adam", lstName: "Smith", phn: 03545343,
    friend: {
        name: "Zon", lstName: "Cha", phn: 45343
    },
    add: "California"
};
const { lstName, phn } = person.friend;
console.log(lstName, phn);

// Array Destructure:
const namesArray = ["Adam", "Ema", "Smith", "Jonson", "Robert", "Char", "Watson"];
const [fstNm, nxtNm, ...remainsNm] = namesArray;
// console.log(remainsNm);




