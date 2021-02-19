function add (num1, num2){
    return num1 + num2;
}

const total = add(17, 30);
console.log(total);

function add (num1, num2 = 0){      //    default value
//    num2 = num2 || 0;
    return num1 + num2;
}

const total = add(17);
console.log(total);
