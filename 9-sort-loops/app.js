const arr = [1, 40, -5, 10, 0];
console.log(`Исходный массив: ${arr}`);

function Sort (arr) {
    let res = arr;
    
    for (let i = 0; i < res.length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < res.length; j++) {
            if (res[j] < res[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            let temp = res[i];
            res[i] = res[minIndex];
            res[minIndex] = temp;
        }
    }
    
    return res;
}

console.log(Sort(arr));