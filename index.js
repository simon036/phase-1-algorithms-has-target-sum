function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();
  for (const number of array) {
    //Calculate the complement that would sum with the current number to reach the target
    const complement = target - number;
    
    //Checks if the complement has already been seen
    if (seenNumbers.has(complement)) {
      return true; // If yes, we found a pair
    }
    
    //Add the current number to the set of seen numbers
    seenNumbers.add(number);
  }
  
  //If no pairs found that sum to the target, 
  return false;
}


/* 
  Write the Big O time complexity of your function here
  - We traverse the array once, and each lookup in the set is O(1) on average.
  -we may store all n elements in the set.
  - So, the overall time complexity is O(n).
*/

/* 
  Add your pseudocode here
  1. Create an empty set called seenNumbers.
  2. For each number in the array:
     a. Calculate the complement as target - number.
     b. If the complement is in seenNumbers, return true.
     c. Add the number to seenNumbers.
  3. If the loop completes without finding a pair, return false.

*/

/*
  Add written explanation of your solution here
  -The function `hasTargetSum` checks if there are two distinct numbers in the input array that sum up to a given target. <br>
  -It uses a set to keep track of the numbers that have been seen so far. For each number in the array, it calculates the complement <br> 
   (the number needed to reach the target) and checks if this complement exists in the set. If it does, it means we have found a pair that sums to the target, 
   and the function returns `true`. If the loop completes without finding any such pair, the function returns `false`.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 9));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, -1, 2, -3, 1], -2));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5, 5, 5], 10));
  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([10, 15, 3, 7], 17));
}

module.exports = hasTargetSum;
