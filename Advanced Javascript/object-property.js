const students = [
    {
        id: 21,
        name: "Omor Sunny"
    },
    {
        id: 23,
        name: "Purnima"
    },
    {
        id: 34,
        name: "Manna"
    },
    {
        id: 42,
        name: "Dipjol"
    }
];

//const selectStudent = [];
//for(let i = 0; i < students.length; i++){
//    const name = students.name;
//    selectStudent.push(name);
//    return name;
//}
//
//console.log(selectStudent);

const names = students.map(name => name.name);
const ids = students.map(name => name.id);
const bigger = students.filter(name => name.id >= 23);
console.log(names, ids, bigger);
