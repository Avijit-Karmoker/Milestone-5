const normalPerson = {
    firstName: 'Ovijit',
    lastName: 'Karmoker',
    salary: 40000,
    getFullName: function () {
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'Sharmin',
    lastName: 'Shama',
    salary: 60000
}

const friendlyPerson = {
    firstName: 'Himel',
    lastName: 'Das',
    salary: 30000
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);


// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(2000);
// friendlyChargeBill(3000);
// console.log(friendlyPerson.salary);


// normalPerson.chargeBill.call(heroPerson, 1000, 100, 10);
// console.log(heroPerson.salary);
//
// normalPerson.chargeBill.call(friendlyPerson, 3000, 200, 50);
// console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(friendlyPerson, [3000, 200, 50]);
console.log(friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [1000, 100, 10]);
console.log(heroPerson.salary);



//difference bteween [bind vs call vs apply]