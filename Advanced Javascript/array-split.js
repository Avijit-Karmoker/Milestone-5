const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const part = nums.slice(3, 6);
console.log(part);
console.log(nums);

const remove = nums.splice(2, 4, 90);
console.log(remove);
console.log(nums);

const together = nums.join('f ');
console.log(together);
console.log(nums);
