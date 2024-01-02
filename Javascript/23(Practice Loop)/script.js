/*
//Write a JS code to print numbers from 1 to 10
for(let i = 1; i <= 10; i += 1){
  console.log(i)
}
*/

/*
//Write a JS code to print numbers from 10 to 1
for(let i = 10; i > 0; i -= 1){
  console.log(i)
}
*/

/*
//Write a JS code to print a 2D array
function printArray(arr){
  for(let num of arr){
    for(let item of num){
      console.log(item)
    }
  }
}

var arr = [[1, 2],
           [3, 4],
           [5, 6]
          ];
printArray(arr)
*/

/*
//Write a JS code to print Even numbers in given array
function printEvenNo(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 == 0){
      console.log(arr[i])
    }
  }
}

var arr = [13,23,12,45,22,48,66,100]
printEvenNo(arr)
*/

/*
//Write a JS code to print odd numbers in given array
function printOddNo(arr){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] % 2 !== 0){
      console.log(arr[i])
    }
  }
}


var arr = [13,23,12,45,22,48,66,100]
printOddNo(arr)
*/

/*
//Write a JS code to print prime numbers in given array
function isPrime(num) {
  if (num <= 1) {
    return false; // Numbers less than or equal to 1 are not prime
  }
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; // If the number has a divisor other than 1 and itself, it's not prime
    }
  }
  return true; // If no divisors were found, the number is prime
}

function printPrimes(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      console.log(arr[i]); // print prime number
    }
  }
}

var arr = [13, 23, 12, 45, 2, 48, 67, 100];
printPrimes(arr);
*/

//Write a JS code to delete all occurrence of element in given array


/*
//Write a JS code to find the power of a number using for loop
function numPower(num, pow){
  let total = 1
  for(let i = 0; i < pow; i++){
    total = total * num
  }
  return total
}

console.log(numPower(4, 3))
*/

/*
//using while loop to Write a JS code to find the power of a number using for loop
function numPower(num, pow){
  let total = 1
  while(pow > 0){
    total *= num
    pow--
  }
  return total
}
console.log(numPower(4, 3))
*/

//Write a JS code to find the no of digits in a number
function countDigits(number) {
  // Convert the number to a string
  const numString = String(number);

  // Get the length of the string, which represents the number of digits
  const numberOfDigits = numString.length;

  // Return the result
  return numberOfDigits;
}

// Example usage:
const exampleNumber = 12345;
const result = countDigits(exampleNumber);
console.log(result); // Output: 5
