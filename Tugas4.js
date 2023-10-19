function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function displayPrimesAfterNumber(inputNumber) {
  let primeNumbers = [];
  let currentNumber = inputNumber + 1;

  while (primeNumbers.length < 1) {
    if (isPrime(currentNumber)) {
      primeNumbers.push(currentNumber);
    }
    currentNumber++;
  }

  return primeNumbers;
}

const prompt = require("prompt-sync")();

const inputNumber = parseInt(prompt("Masukkan sebuah bilangan:"));
const primesAfterInput = displayPrimesAfterNumber(inputNumber);
console.log(
  `Bilangan prima setelah ${inputNumber} adalah: ${primesAfterInput.join(", ")}`
);

function sumPrimesInRange(start, end) {
  let sum = 0;
  for (let num = start; num <= end; num++) {
    if (isPrime(num)) {
      sum += num;
    }
  }
  return sum;
}

const start = parseInt(prompt("Masukkan angka awal rentang:"));
const end = parseInt(prompt("Masukkan angka akhir rentang:"));

const primeSum = sumPrimesInRange(start, end);
console.log(
  `Jumlah bilangan prima dari ${start} sampai ${end} adalah: ${primeSum}`
);
