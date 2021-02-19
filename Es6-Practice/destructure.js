const person = { name: 'Ovijit', age: 22, job: 'Web Developer', gfName: 'Sharmin Shama', phone: '01771133627', address: 'Kochu Khet', friends: ['Himel', 'Deep', 'Rezaul', 'Tinni']};
//const gfName = person.gfName;
              //console.log(person.gfName);
//console.log(gfName);
//const phone = person.phone;
//console.log(phone);
const { phone, gfName, address, salary } = person;
//const { gfName } = person;

//console.log(gfName, phone, address, salary);

const friends = ['Sakib Kkan', 'Arbaz Khan', 'Salman Khan', 'Arman Khan', 'Salman Shah', 'Sharukh Khan'];
const [first, second, ...restFriends] = friends;
console.log(first, second);
console.log(restFriends);


const complexObject = {
    name : 'abc',
    info : {
        address: 'Kola bagan',
        leader: 'Tiger'
    }
}

const { leader } = complexObject.info;
console.log(leader);
