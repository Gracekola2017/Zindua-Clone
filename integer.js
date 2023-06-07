

// Initialize the sum variable
let sum = 0;

// Iterate over all numbers between 1 and n
for (let i = 1; i <= n; i++) {
  // Check if the number is divisible by 3 or 5
  if (i % 3 === 0 || i % 5 === 0) {
    // Update the sum
    sum += i;
  }
}

// Display the sum to the user
console.log("The sum of numbers between 1 and", n, "that are divisible by 3 or 5 is:", sum);
