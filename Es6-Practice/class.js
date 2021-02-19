class Student{
   constructor(sId, sName){
       this.id = sId;
       this.name = sName;
       this.UV = 'Gono University'
   }
}

const student1 = new Student(21, 'Shama');
const student2 = new Student(20, 'Avneet');
const student3 = new Student(22, 'Ovijit')
console.log(student1, student2, student3);
