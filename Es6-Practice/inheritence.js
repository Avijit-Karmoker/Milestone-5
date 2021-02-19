class Parent {
    constructor() {
        this.fatherName = "Schwerznegger";
    }
}


class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
    getFullName() {
        return this.name + " " + this.fatherName;
    }
}
const baby = new Child("Fatakesto");
const baby2 = new Child("Horipodo");
console.log(baby.getFullName());
console.log(baby2.getFullName());
