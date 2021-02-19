// first way


//function doubleIt(num){
//    return num * 2;
//}

//const result = doubleIt(27);
//console.log(result);



// second way

//const doubleIt = function myFun(num){
//    return num * 2;
//}



//  es6 shortcut way

const doubleIt = num => num * 2;
const result = doubleIt(7);
console.log(result);

const add = (x, y) => x + y;
const result1 = add(7, 13);
console.log(result1);

const give5 = () => 5;
const result2 = give5();
console.log(result2);

const doMath = (x, y) => {
    const add = x + y;
    const diff = x - y;
    const result = add * diff;
    return result;
}

const result3 = doMath(14,4);
console.log(result3);
