// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).

for (let i = 20; i <= 30; i += 0.5) {
    console.log(i);
  }

  
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.

const exchangeRate = 27;

for (let dollars = 10; dollars <= 100; dollars += 10) {
  const uah = dollars * exchangeRate;
  console.log(`${dollars} доларів = ${uah} гривень`);
}


// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.

let n = 50;
let i = 1;

while (i * i <= n && i <= 100) {
  console.log(i * i);
  i++;
}

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).

let num = 17;

let isPrime = true;

if (num <= 1) {
  isPrime = false; 
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break; 
    }
  }
}

if (isPrime) {
  console.log(num + " є простим числом");
} else {
  console.log(num + " не є простим числом");
}


// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).

let number = 123; // задане число
let power = 0; // початкова ступінь числа 3

while (Math.pow(3, power) <= number) {
  if (Math.pow(3, power) === number) {
    console.log(`${number} можна отримати шляхом зведення числа 3 у ступінь ${power}`);
    break;
  }
  power++;
}

if (Math.pow(3, power) > number) {
  console.log(`${number} не можна отримати шляхом зведення числа 3 у жодний ступінь`);
}

