//Реалізувати рекурсивну функцію, яка зводить число в ступінь.
// Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
// Ступінь передається як другий аргумент у функціюpow (num, degree).

function pow(num, degree) {
    if (degree === 0) {
        return 1;
    } else if (degree === 1) {
        return num;
    } else {
        return num * pow(num, degree - 1);
    }
}

console.log(pow(2, 3)); // 8
console.log(pow(5, 2)); // 25
console.log(pow(10, 0)); // 1
