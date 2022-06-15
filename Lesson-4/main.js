const todoListID_1 = 'qwer';
const todoListID_2 = 'dsfg';

const todoLists = [
    {
        id: todoListID_1,
        title: 'What to learn',
        filter: 'all',
    },
    {
        id: todoListID_1,
        title: 'What to buy',
        filter: 'all',
   },
]
const tasks = {
    [todoListID_1]: [
        {id: 12, title: 'JS', isDone: false},
        {id: 13, title: 'TS', isDone: false},
        {id: 14, title: 'HTML', isDone: false},
    ],
    [todoListID_2]: [
        {id: 22, title: 'Milk', isDone: false},
        {id: 23, title: 'Cheese', isDone: false},
        {id: 24, title: 'Ice-cream', isDone: false},
    ],
}

// reduce

const nums = [10, 20, 30] //sum

console.log(nums.reduce((acc, cur) => acc + cur));
console.log(tasks[todoListID_1][0].title)

let students = [
    {
        id: 1,
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        id: 2,
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        id: 3,
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        id: 4,
        name: "John",
        age: 23,
        isMarried: false,
        scores: 100
    }
];

console.log(students.reduce((acc, cur) => acc.scores > cur.scores ? acc : cur));
console.log(students.reduce((acc, cur) => acc + cur.scores, 0));
console.log(students.map(st => ({...st, scores: st.scores + 10})));
console.log(students.reduce((acc, cur) => {
    acc.push({...cur, scores: cur.scores + 10});
    return acc;
}, []));

const st = {
    1: {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    }
}

console.log(students.reduce((acc, cur) => {
    acc[cur.id] = {...cur};
    delete acc[cur.id].id;
    return acc;
}, {}));