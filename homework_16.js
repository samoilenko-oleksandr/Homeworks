// 1.Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let sum = 0;
let positiveCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveCount++;
    }
    sum += arr[i];
}

console.log("Сума:", sum);
console.log("Кількість позитивних елементів:", positiveCount);

// 2.Знайти мінімальний елемент масиву та його порядковий номер.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let min = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i];
        index = i;
    }
}

console.log("Мінімальний елемент:", min);
console.log("Його порядковий номер:", index);

// 3.Знайти максимальний елемент масиву та його порядковий номер.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let max = arr[0];
let index = 0;

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        index = i;
    }
}

console.log("Максимальний елемент:", max);
console.log("Його порядковий номер:", index);

// 4.Визначити кількість негативних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let negativeCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        negativeCount++;
    }
}

console.log("Кількість негативних елементів:", negativeCount);

// 5.Знайти кількість непарних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let oddPositiveCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        oddPositiveCount++;
    }
}

console.log("Кількість непарних позитивних елементів:", oddPositiveCount);

// 6. Знайти кількість парних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let evenPositiveCount = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        evenPositiveCount++;
    }
}

console.log("Кількість парних позитивних елементів:", evenPositiveCount);

// 7. Знайти суму парних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let evenPositiveSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 === 0) {
        evenPositiveSum += arr[i];
    }
}

console.log("Сума парних позитивних елементів:", evenPositiveSum);

// 8. Знайти суму непарних позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let oddPositiveSum = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && arr[i] % 2 !== 0) {
        oddPositiveSum += arr[i];
    }
}

console.log("Сума непарних позитивних елементів:", oddPositiveSum);

// 9. Знайти добуток позитивних елементів.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let positiveProduct = 1;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveProduct *= arr[i];
    }
}

console.log("Добуток позитивних елементів:", positiveProduct);

// 10. Знайти найбільший серед елементів масиву, ост альні обнулити.

const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== max) {
        arr[i] = 0;
    }
}

console.log("Масив з обнуленими елементами, крім максимального:", arr);
