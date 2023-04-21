// Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

const arr = [1, 'two', 3, 'four', 5];
calculateAverage(arr);

function calculateAverage(arr) {
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number') {
            sum += arr[i];
            count++;
        }
    }

    if (count > 0) {
        const average = sum / count;
        console.log(`Середнє арифметичне числових елементів: ${average}`);
    } else {
        console.log('У масиві немає числових елементів');
    }
}

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

const x = prompt('Введіть перше число:');
const y = prompt('Введіть друге число:');
const znak = prompt('Введіть знак операції (+, -, *, /, %, ^):');

const result = doMath(x, znak, y);

function doMath(x, znak, y) {
    let result;

    switch (znak) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
            break;
        case '%':
            result = x % y;
            break;
        case '^':
            result = Math.pow(x, y);
            break;
        default:
            result = 'Введено некоректний знак';
    }

    return result;
}

console.log(`Результат: ${result}`);

// Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

const rows = prompt('Введіть кількість рядків:');
const cols = prompt('Введіть кількість стовпців:');

const arr = fillArray(rows, cols);

function fillArray(rows, cols) {
    const arr = [];

    for (let i = 0; i < rows; i++) {
        const row = [];

        for (let j = 0; j < cols; j++) {
            const value = prompt(`Введіть значення для елементу з індексом [${i}][${j}]`);

            row.push(value);
        }

        arr.push(row);
    }

    return arr;
}

console.log(arr);


// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const str = prompt("Введіть рядок:");
const chars = prompt("Введіть символи для видалення через кому:").split(",");

const result = removeChars(str, chars);

function removeChars(str, chars) {
    const charSet = new Set(chars);
    let result = "";

    for (let i = 0; i < str.length; i++) {
        if (!charSet.has(str[i])) {
            result += str[i];
        }
    }

    return result;
}

console.log(result);
