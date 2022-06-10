const students = [
    {
        name: 'Bob',
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: 'Nick',
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100
    },
]
const getNames = (arr) => arr.map(a => a.name);
// const names = students.map(n => n.name);
const names = getNames(students);

console.log(names);

const addScores = (arr) => arr.map(a => ({...a, scores: a.scores + 10}))
const addProp = (arr) => arr.map(a => ({isStudent: true, ...a}))

console.log(addScores(students));
console.log(addProp((students)));

const myFind = (arr, func) => {
    for (let i = 0; i < arr.length; i++) {
        const newValue = func(arr[i]);
        if (newValue === true) {
            return arr[i];
        }
    }
}

console.log(myFind(students, st => st.name === 'Alex'));
