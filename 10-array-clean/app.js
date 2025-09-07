const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function DeleteElement (num) {
    if (num > 5) {
        return true;
    } else {
        return false;
    }
}

function ModifyArray (arr, fn) {
    const res = [];
    for (const item of arr) {
        if (fn(item)) {
            res.push(item);
        }
    }
    return res;
}

console.log(`Исходный массив: ${arr}`);
const res = ModifyArray(arr, DeleteElement);
console.log(`Результат: ${res}`);