//1. Реализуйте функцию, которая принимает в качестве параметра массив чисел и возвращает самое большое значение из массива (максимум массива)
// [1,22,3,4,5] => 22
const returnMaxNumber = (arr) => {
    let maxNumber = arr[0];
    for (const arrKey in arr) {
        if (arr[arrKey] > maxNumber) maxNumber = arr[arrKey];
    }
    return maxNumber;
}
console.log(returnMaxNumber([1, 22, 3, 4, 5]));

//2. Реализуйте функцию, которая принимае в качестве параметра массив с вложенными в него массивами из чисел и возвращает
//массив, состоящий из максимальных значений каждого вложенного массива.
// [[1,2,3], [4,5,6]] => [3,6]
const returnMaxNumberOfArr = (arr) => {
    let maxNumber = 0;
    let arrOfMaxNumber = [];
    for (let i = 0; i < arr.length; i++) {
        let maxNumber = 0;
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > maxNumber) maxNumber = arr[i][j];
            if (j === arr[i].length - 1) arrOfMaxNumber.push(maxNumber)
        }
    }
    return arrOfMaxNumber;
}
console.log(returnMaxNumberOfArr([[1, 2, 3], [4, 5, 6]]));

//3. Реализуйте функцию, которая принимае в качестве параметра массив значений и возвращает новый массив, очищенный от значений,
// которые могут быть интерпретированы как false
// [1,2,3,4, false, 5,6] => [1,2,3,4,5,6]
const delFalseFromArr = (arr) => {
    let newArr = [];
    for (const arrKey in arr) {
        if (arr[arrKey]) newArr = [...newArr, arr[arrKey]];
    }
    return newArr;
}
console.log(delFalseFromArr([1, 2, 3, 4, false, 5, 6]));

//4. Реализуйте функцию, которая принимае в качестве параметра массив произвольных элементов и переменную, которая содержит произвольное значение.
// Если это значение содержится в массиве, функция должна возвращать индекс первого вхождения значения в массив, если не содержится - произвольное отрицательное число.
// ([1,2,3,4,5,5], 5) => 4, ([1,2,3,4,5,5], 10) => -1
const findNumInArr = (arr, num) => {
    let index = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i;
    }
    return index;
}
console.log(findNumInArr([1, 2, 3, 4, 5, 5], 5));
console.log(findNumInArr([1, 2, 3, 4, 5, 5], 10));

//5. Реализуйте функцию, которая возвращает массив,  в котором элементы исходного массива разбиты на вложенные массивы указанной длинны
// ([1,2,3,4,5,6], 3) => [[1,2,3], [4,5,6]]
const splitArr = (arr, num) => {
    let newArr = [];
    let resultArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr = [...newArr, arr[i]];
        if (i % 3 === 2) {
            resultArr = [...resultArr, newArr]
            newArr = [];
        }
    }
    return resultArr;
}
console.log(splitArr([1, 2, 3, 4, 5, 6], 3));

//6. Реализуйте функцию, которая принимае в качестве параметра массив чисел и количество максимальных элементов.
// Возвращает массив, сосотоящий из указанного количества максимальных элементов
// ([1,22,3,4,5], 2) => [22, 5]
const returnMaxNumbers2 = (arr, num) => {
    let arrMaxNum = [];
    debugger
    while (true) {
        let maxNumber = 0;
        let index = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > maxNumber) {
                index = i;
                maxNumber = arr[i];
            }
        }
        arrMaxNum = [...arrMaxNum, arr[index]]
        arr[index] = 0;
        if (arrMaxNum.length === num) return arrMaxNum;
    }
}
console.log(returnMaxNumbers2([1, 22, 3, 4, 5], 2));

// NB!!! При решении использовать только цикл, не испльзовать методы массивов и функцию Math.max()