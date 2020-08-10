const person = {
    fstName: "Jamal",
    lstName: "Uddin",
    salary: 1000,
    chargeBill: function (amount,tax,tc) {
        this.salary = this.salary - amount - tax - tc;
        return this.salary;
    }
}

const anotherPerson = {
    fstName: "Mahmud",
    lstName: "Hasan",
    salary: 20000,
}

// by this "bind" method we can use another objects function into other objects
// const anotherPersonsSalary = person.chargeBill.bind(anotherPerson);
// console.log(anotherPersonsSalary(1000));

// using another object function by "call" method:
// const anotherPSalary = person.chargeBill.call(anotherPerson, 2000,200,20);
// console.log(anotherPSalary);

// by "apply" method:
const anotherPSalaryApply = person.chargeBill.apply(anotherPerson, [2000, 200, 20]);
console.log(anotherPSalaryApply);