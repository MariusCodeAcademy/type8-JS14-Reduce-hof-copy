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
console.table(students);
// 1. atrinkti i nauja masyva studentus kurie turi masina
const drivers = students.filter((studObj) => studObj.hasCar === true);
console.table(drivers);

// 1.1 atrinkti i nauja masyva studentus kurie turi masina su forEach
const driverEach = [];
students.forEach((studObj) => {
  if (studObj.hasCar === true) {
    driverEach.push(studObj);
  }
});
console.table(driverEach, ['name', 'hasCar']);

// 2. Atrinkti i nauja masyva zmones is Vilniaus
const vilnieciai = students.filter((studObj) => studObj.town === 'Vilnius');
console.group('vilnieciai');
console.table(vilnieciai);
console.groupEnd();

// 3. Atrinkti i nauja masyva moteris

// 4. suzinoti ar yra nors vienas zmogus is Kauno
const arYraIsKauno = students.some((studObj) => studObj.town === 'Kaunas');
console.log('arYraIsKauno ===', arYraIsKauno);
const arAmziusYraSkaiciusVisur = students.every((studObj) => typeof studObj.age === 'number');
console.log('arAmziusYraSkaiciusVisur ===', arAmziusYraSkaiciusVisur);

// 5. suskaiciuoti kiek zmoniu yra jaunesni nei 26
// let jaunesniNei26 = 0;
// students.forEach((studObj) => {
//   if (studObj.age < 26) {
//     jaunesniNei26++;
//   }
// });
const jaunesniNei26 = students.filter((studObj) => studObj.age < 26).length;
console.log('jaunesniNei26 ===', jaunesniNei26);

// 6.0 Grazinti nauja masyva kuriame yra visu zmoniu amziai;
let ages = students.map((studObj) => studObj.age);
console.log('ages ===', ages);

// 6. Grazinti nauja masyva kurio objektuose butu tik vardas ir miestas
const nameAndTownArray = students.map((studObj) => {
  const newObj = {
    vardas: studObj.name,
    miestas: studObj.town,
  };
  return newObj;
});
console.log('nameAndTownArray ===', nameAndTownArray);

// 7. sugeneruoti rikiuoto saraso pavidalu htmle visu zmoniu vardus ir kiek jiems metu

// 8. Gauti visu zmoniu metu suma

// 9. suskaiciuoti visu zmoniu metu vidurki

// 10. surasti zmongu vardu 'Mike' ir padaryti kad jis nusipirko masina yra tiesa
