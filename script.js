//String Manipulation Functions
//1. Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('Tochi'));

//2. Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
  let count = 0;

  for (let char of str) {
    count++;
  }
  return count;
}

console.log(countCharacters('Hello world!'));

//3. Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.

function capitalizeWords(sentence) {
  let words = sentence.split(' ');
  let capitalized = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capital = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    capitalized.push(capital);
  }
  return capitalized.join(' ');
}

console.log(capitalizeWords('hello tochi!, welcome to the javascript class'));

//Array Functions
//1. Find the maximum and minimum values in an array of numbers.
function findMinMaxArray(arr) {
  if (arr.length === 0) {
    return `Array is empty`;
  }
  let minNum = arr[0];
  let maxNum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < minNum) {
      minNum = arr[i];
    }
    if (arr[i] > maxNum) {
      maxNum = arr[i];
    }
  }
  return `min: ${minNum}, max: ${maxNum}`;
}

console.log(findMinMaxArray([4, 5, 7, 12, 1, 9, 30, 3, 5]));

//2.Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumOfArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sumOfArray([23, 5, 10, 9, 120]));

//3. Filter Array: Implement a function that filters out elements from an array based on a given condition.
function filteredArray(arr, condition) {
  let filtered = [];

  for (let i = 0; i < arr.length; i++) {
    if (condition(arr[i])) {
      filtered.push(arr[i]);
    }
  }
  return filtered;
}

console.log(
  filteredArray([2, 5, 4, 9, 7, 10, 15, 20, 6], (numbers) => numbers >= 10)
);

//Mathematical Functions:
//1. Factorial: Write a function that calculates the factorial of a given number.
function factorial(n) {
  if (n < 0) {
    return 'Factorial is not defined for negative numbers.';
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(3));
console.log(factorial(-3));

//2.Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));

//3. Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacciSequence(n) {
  //the first 2 numbers in a fibonacci sequence are 0 and 1
  let sequence = [0, 1];

  //start the loop from 2 because the first two numbers are already in the sequence
  for (let i = 2; i < n; i++) {
    let next = sequence[i - 1] + sequence[i - 2]; //the next number is the sum of the previous two numbers
    sequence.push(next);
  }
  return sequence;
}
console.log(generateFibonacciSequence(7));
