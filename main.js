const countries = ['Japan', 'China', 'Corea', 'UK'];

const persons = [
    { id: 1, name: 'Chun Li', role: 'Teacher' },
    { id: 2, name: 'Tomoko', role: 'Student' },
    { id: 3, name: 'Xiangli', role: 'Chef' },
    { id: 4, name: 'Ramona', role: 'Deliver' },
    { id: 5, name: 'Shoko', role: 'Student' },
    { id: 6, name: 'Samus', role: 'SearchBussiness' },
    { id: 7, name: 'Lara Croft', role: 'Archaeologist' },
    { id: 8, name: 'Shantae', role: 'Genie' },
    { id: 9, name: 'Woo', role: 'Lawyer' },
    { id: 10, name: 'Isa', role: 'Student' },
    { id: 11, name: 'ENA', role: 'Student' },
]

const result = countries.includes('Japan');
console.log(result);

const resultSome = persons.some((person) => person.name === 'Shoko' && 'Woo');
console.log(resultSome);

const resultIndex = persons.findIndex((person) => person.role === 'Student');
console.log(resultIndex);

const resultFind = persons.find((person) => person.name === 'Samus');
console.log(resultFind);

const resultFilter = persons.filter((person) => person.role === 'Genie');
console.log(resultFilter);

const resultEvery = persons.every((person) => person.role === 'Student');
console.log(resultEvery);