const numbers = [1, 2, 3, 4];
// [1, 2]
// [1/2 + 2/2]
// susumuoti visus numbers skaicius
let total = 0;
numbers.forEach((sk) => {
  total = total + sk;
});
console.log('total ===', total);

const avg1 = total / numbers.length;
console.log('avg1 ===', avg1);
// arrray reduce ==========
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
console.log('numbers ===', numbers);
// debugger;
const totalRed = numbers.reduce((total, sk, i) => {
  // console.log(`cycle: ${i}, total: ${total}, sk: ${sk}`);
  return total + sk;
}, 0);

console.log('totalRed ===', totalRed);

// vidurkis
const totalRedAVG = numbers.reduce((total, sk, i) => {
  // console.log(`cycle: ${i}, total: ${total}, sk: ${sk}`);
  const singleSkAvg = sk / numbers.length;
  return total + singleSkAvg;
}, 0);

console.log('totalRedAVG ===', totalRedAVG);
