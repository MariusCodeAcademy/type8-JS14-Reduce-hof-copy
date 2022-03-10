let x = 10; // saved by value
let xCopy = x;

xCopy = 20;

console.log({ x }, { xCopy });

// by reference
//     x0845
const numbers = [1, 2, 3];
const numbers2 = [1, 2, 3];
//       x0845     x0845
let numbersCopy = numbers;

let numbersCopy = numbers.slice();
console.log(numbersCopy === numbers);
console.log('numbers2 === numbers', numbers2 === numbers);

numbersCopy.push(7);

console.log('numbersCopy ===', numbersCopy);
console.log('numbers ===', numbers);

// obj saved by reference

const user = {
  name: 'james',
  age: 25,
};

const userCopy = user;
userCopy.town = 'Viena';
console.log('userCopy ===', userCopy);
console.log('user ===', user);
