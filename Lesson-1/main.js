const user = {
    name: "Bob",
    age: 26,
    isMarried: true,
    friends: ["Alex", "Bob", "Joe"],
    address: {
        city: "Boboruisk",
        street: "Lenina"
    }
}

// const copyUser = user;
//
// user.name = "Anne2";
//
// //console.log(copyUser.name);
//
// const realCopyUser = {...user}
//
// realCopyUser.name = "Anne3"
// console.log(copyUser);
//
//
// console.log(realCopyUser);

const copyUser = {...user};
copyUser.friends.push("Anne");
console.log(copyUser);
console.log(user);

// const deepCopy = {...user, friends: [...user.friends]}
// deepCopy.friends.push("Anne12");
//
// console.log(deepCopy);

const newCopyUser = {...user, friends: [...user.friends], address: {...user.address}}
newCopyUser.address.street = "Krasnaya";

console.log(newCopyUser);

const students = [
    {name: "Bob"},
    {name: "Alex"},
    {name: "Ann"},
    {name: "Ann"}
]

const newStudents = [...students];

const deepCopyStudents = [];

for (let i = 0; i < students.length; i++) {
    deepCopyStudents[i] = {...students[i]};
}

console.log(deepCopyStudents);



console.log(newStudents);

