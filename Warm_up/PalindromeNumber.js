// leetcode Problem - 9

function isPalindrome(n) {
  if (n < 0) return false;

  const nCopy = n;
  let rev = 0;
  while (n > 0) {
    rev = 10 * rev + (n % 10);
    n = Math.floor(n / 10);
  }

  return rev == nCopy;
}

console.log(isPalindrome(2552));
