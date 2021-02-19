const ages = [12, 13, 38, 42, 16];
const ages2 = [14, 15, 17, 18, 13];
const ages3 = [24, 25, 37, 28, 33];
//const allAges = ages.concat(ages2).concat(9).concat(ages3);
const allAges2 = [...ages, ...ages2, 9, ...ages3];
console.log(allAges2);

const minister = 700;
const business = 500;
const sochib = 710;
const maximum = Math.max(minister, business, sochib);
console.log(maximum);


const taka = [650, 700, 400];
const maximum1 = Math.max(...taka);
console.log(maximum1);
