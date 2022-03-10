const students = [
  {
    name: 'James',
    gender: 'male',
    age: 25,
    town: 'Vilnius',
    hasCar: true,
  },
  {
    name: 'Jill',
    gender: 'female',
    age: 28,
    town: 'Kaunas',
    hasCar: true,
  },
  {
    name: 'Mike',
    gender: 'male',
    age: 18,
    town: 'Kaunas',
    hasCar: false,
  },
  {
    name: 'Jane',
    gender: 'female',
    age: 22,
    town: 'Klaipeda',
    hasCar: false,
  },
  {
    name: 'Jannet',
    gender: 'female',
    age: 29,
    town: 'Klaipeda',
    hasCar: true,
  },
  {
    name: 'Cory',
    gender: 'male',
    age: 30,
    town: 'Siauliai',
    hasCar: true,
  },
  {
    name: 'Minks',
    gender: 'male',
    age: 19,
    town: 'Siauliai',
    hasCar: false,
  },
];

// string tipo masyvo rikiavimas sort()
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log('fruits ===', fruits);
// masyvu rikiavimas
// veikia gerai tik ant string tipo duomenu
fruits.sort();
console.log('fruits sort ===', fruits);
fruits.reverse();
console.log('fruits reverse ===', fruits);

// numbers tipo masyvo rikiavimas
const numbers = [5, 1, 2, 3, 4, 10, 50, 112];
console.log('numbers ===', numbers);

// a-z sort
numbers.sort((a, b) => a - b);
// z-a sort
numbers.sort((a, b) => b - a);

console.log('numbers ===', numbers);
// issrikiuoti pagal amziu
// students.sort((stdObjA, stdObjB) => stdObjA.age - stdObjB.age);
// console.log('students ===', students);
// issrikiuoti pagal varda a-z
// students.sort((stdObjA, stdObjB) => {
//   if (stdObjA.gender > stdObjB.gender) {
//     return -1;
//   } else {
//     return 1;
//   }
// });
students.sort((stdObjA, stdObjB) => (stdObjA.gender > stdObjB.gender ? 1 : -1));
console.log('students ===', students);
