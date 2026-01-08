//task-1

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello"));


//task-2

function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("programming")); // 3


//task-3

function isPalindrome(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return str === reversed;
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false


//task- 4

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([5, 1, 9, 3])); // 9


//task- 5

function removeDuplicates(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); 
// [1, 2, 3, 4]


//task- 6

function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4])); // 10



//task- 7

function findEvenNumbers(arr) {
  let evens = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evens.push(arr[i]);
    }
  }

  return evens;
}

console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));
// [2, 4, 6]


//task- 8

function capitalizeWords(str) {
  let words = str.split(" ");
  let result = [];

  for (let i = 0; i < words.length; i++) {
    let word =
      words[i][0].toUpperCase() + words[i].slice(1);
    result.push(word);
  }

  return result.join(" ");
}

console.log(capitalizeWords("hello world"));
// Hello World


//task- 9

function factorial(num) {
  let result = 1;

  for (let i = 1; i <= num; i++) {
    result = result * i;

  }

  return result;
}

console.log(factorial(5)); // 120


//task- 10

function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } 
    else if (i % 3 === 0) {
      console.log("Ping");
    } 
    else if (i % 5 === 0) {
      console.log("Pong");
    } 
    else {
      console.log(i);
    }
  }
}

pingPong();
