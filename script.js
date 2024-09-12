//Запитую у користувача його вік і визначаю, ким він є: 
let age = prompt("Введіть ваше вік:"); {

  if (isNaN(age) || age < 0) {
    alert("Невірне значення. Спробуйте знову.");
  } else {
    if (age <= 11) {
      alert("Ви дитина.");
    } else if (age <= 17) {
      alert("Ви підліток.");
    } else if (age <= 59) {
      alert("Ви дорослий.");
    } else {
      alert("Ви пенсіонер.");
    }
  }
}

//Запитую у користувача число від 0 до 9 і ввожу йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).
let number = prompt("Введіть число від 0 до 9:");; {
  const symbols = [')', '!', '@', '#', '$', '%', '^', '&', '*', '('];

  if (number >= 0 && number <= 9) {
    alert("Спецсимвол: " + symbols[number]);
  } else {
    alert("Невірне значення. Введіть число від 0 до 9.");
  }
}

//Підраховую суму всіх чисел в заданому користувачем діапазоні.
function sumInRange() {

  const start = parseInt(prompt("Введіть початок діапазону:"));
  const end = parseInt(prompt("Введіть кінець діапазону:"));

  if (isNaN(start) || isNaN(end)) {
    alert("Невірні значення. Введіть числа.");
    return;
  }

  if (start > end) {
    alert("Початок діапазону не може бути більше кінця.");
    return;
  }

  let sum = 0;
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  alert("Сума чисел у діапазоні: " + sum);
}

sumInRange();

//Запитeю у користувача 2 числа і знаходжу найбільший спільний дільник.
function findGCD() {
  const num1 = parseInt(prompt("Введіть перше число:"));
  const num2 = parseInt(prompt("Введіть друге число:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Невірні значення.Введіть числа.");
    return;
  }

  function gcd(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  const result = gcd(num1, num2);

  alert("Найбільший спільний дільник: " + result);
}

findGCD();

//Запитую у користувача число і вожу всі дільники цього числа.
function findDivisors() {
  const num = parseInt(prompt("Введіть  число:"));

  if (isNaN(num) || num <= 0) {
    alert("Невірне значання.Введіть дадатне чіле число.");
    return;
  }

  let divisors = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }

  alert("Дільник числа " + num + ":" + divisors.join(","));
}

findDivisors();