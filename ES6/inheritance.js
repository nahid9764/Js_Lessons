class ParentClass{
    constructor(){
        this.fatherName = "Hasan";
    }
}

class ChildClass extends ParentClass{
    constructor(name){
        super();
        this.name = name;      
    }
    getFullName(){
        return this.name+ " " + this.fatherName;
    }
}
const baby = new ChildClass("Mahmud");

console.log(baby.getFullName());