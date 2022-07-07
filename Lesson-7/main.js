//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
// for или str.repeat()

const repeatString = (str, num, div) => {
    let arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(str);
    }
    return arr.join(div);
}
console.log(repeatString("yo", 3, " "));
console.log(repeatString("yo", 3, ","));


//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false
// str.startWith() slice indexOF

const checkStart = (str, sub) => str.toLowerCase().startsWith(sub.toLowerCase());

console.log(checkStart("Incubator", "inc"));
console.log(checkStart("Incubator", "yo"));

//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам инкубатора желаю удачи!", 10) => "Всем студе..."

const truncateString = (str, num) => str.slice(0, num).concat('...');

console.log(truncateString("Всем студентам инкубатора желаю удачи!", 10));

//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам инкубатора желаю удачи!") => "Всем"
// getMinLengthWord("") => null
// split()

const getMinLengthWord = (str) => str ? str.replace(/[^А-Яа-я ]/gi, '').replace(/\s+/gi, ' ').split(' ').reduce((a, b) => a.length < b.length ? a : b) : null;

console.log(getMinLengthWord("Всем студентам инкубатора        желаю удачи!^&%&*"));
console.log(getMinLengthWord(""));


//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам инкуБатора Желаю удачИ!") => "Всем Студентам Инкубатора Желаю Удачи!"

const setUpperCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(w => {
            w = w.split('');
            w[0] = w[0].toUpperCase();
            return w.join('');
        })
        .join(' ');
}

console.log(setUpperCase("всем стУдентам инкуБатора Желаю удачИ!"));

//6. Реализуйте функцию, котрая принимает параметрами две строки. Если все символы второй строки содержаться в первой - возвращает true, если нет - возвращает false. Проверка проводится без учёта регистра.
// isIncludes("Incubator", "Cut") => true
// isIncludes("Incubator", "table") => false
// every()

const isIncludes = (str1, str2) => str2.toLowerCase().split('').every(l => str1.toLowerCase().includes(l));

console.log(isIncludes("Incubator", "Cut"));
console.log(isIncludes("Incubator", "table"));


