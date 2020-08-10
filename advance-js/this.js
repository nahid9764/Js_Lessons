const obj = {
    name: "Mahmud Hasan",
    getFullName: function () {
        console.log(this);
        return "Hello Mr.", this.name;
    }
}

const anotherObj = {
    name: "Hasem Sikder",
}
 
anotherObj.getFullName = obj.getFullName;

obj.getFullName();
anotherObj.getFullName();
