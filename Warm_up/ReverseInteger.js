// Leetcode Problem - 7

function reverse(x) {
  let xCopy = x;
  x = Math.abs(x);
  let rev = 0;
  while (x > 0) {
    rev = 10 * rev + (x % 10);
    x = Math.floor(x / 10);
  }

  const limit = Math.pow(2, 31);
  if (xCopy < 0) {
    return -rev < -limit ? 0 : -rev;
  } else return rev > limit - 1 ? 0 : rev;
}

console.log(reverse(-325443364));
