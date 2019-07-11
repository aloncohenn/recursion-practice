// Write a recursive function that counts how many sheep jump over the fence. Your program should take a number as input. That number should be the number of sheep you have. The function should display the number along with the message "Another sheep jumps over the fence" until no more sheep are left.

const sheepCounter = amount => {
  // base case
  if (amount === 0) {
    console.log('All sheep jumped over the fence.');
    return;
  }
  // recursive case
  console.log(`${amount}: Another sheep jumps over the fence.`);
  return sheepCounter(amount - 1);
};

console.log(sheepCounter(3));

// Write a function called powerCalculator() that takes two parameters, an integer as a base, and another integer as an exponent. The function returns the value of the base raised to the power of the exponent. Use only exponents greater than or equal to 0 (positive numbers)

const powerCalculator = (base, exponent) => {
  if (exponent < 0) {
    console.log('exponent should be >= 0');
    return;
  }
  // base case
  if (exponent === 1) {
    return base;
  }
  // recursive case
  return base * powerCalculator(base, exponent - 1);
};

console.log(powerCalculator(10, 3));

// Write a function that reverses a string. Take a string as input, reverse the string, and return the new string.

const reverseString = str => {
  // base case
  if (str.length === 0) {
    return;
  }
  // recursive case
  if (str.length === 1) {
    return str.slice(-1);
  }
  return str.slice(-1) + reverseString(str.slice(0, -1));
};

console.log(reverseString('felix'));

// Calculate the nth triangular number. A triangular number counts the objects that can form an equilateral triangle. The nth triangular number is the number of dots composing a triangle with n dots on a side, and is equal to the sum of the n natural numbers from 1 to n. This is the Triangular Number Sequence: 1, 3, 6, 10, 15, 21, 28, 36, 45.

const calculateTriangularNumber = n => {
  // base case
  if (n === 1) {
    return n;
  }
  //recursive case
  return n + calculateTriangularNumber(n - 1);
};

console.log(calculateTriangularNumber(4));

// Write a recursive function that split a string based on a separator (similar to String.prototype.split). Don't use JS array's split function to solve this problem.

const stringSplitter = str => {
  // base case
  if (str.length === 0) {
    return;
  }

  if (str.length === 1) {
    return str.slice(-1);
  }
  // recursive case
  if (str[0] !== '/') {
    return str[0] + stringSplitter(str.slice(1));
  }
  return stringSplitter(str.slice(1));
};

console.log(stringSplitter('02/20/2020'));

// Write a recursive function that prints the Fibonacci sequence of a given number. The Fibonacci sequence is a series of numbers in which each number is the sum of the 2 preceding numbers. For example, the 7th Fibonacci number in a Fibonacci sequence is 13. The sequence looks as follows: 1, 1, 2, 3, 5, 8, 13.

const fibonacci = num => {
  // base case
  if (num < 2) {
    return num;
  }
  // recursive case
  return fibonacci(num - 1) + fibonacci(num - 2);
};

console.log(fibonacci(7));
