//given a str, return true or false
//check if any permutation of a string could be a palindrome
//assume lower case, no spaces

//strings with an odd length - letter counts must all be even, one letter can have an odd count
//strings with even length - letter counts must all be even
function palindromePermutation(str) {
  const counts = {};

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    if (counts[letter] === undefined) counts[letter] = false
    else counts[letter] = !counts[letter];
  }

  let falseCount = 0;
  for (let letter of Object.keys(counts)) {
    if(counts[letter] === false) {
      if(str.length % 2 === 0) return false;
      falseCount += 1;
      if(falseCount > 1) return false;
    }
  }
  return true;
}
