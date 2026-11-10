function isPowerOfTwo(n) {
  if(n==1) return true;
  else if(n%2 ==1 || n<1) return false;
  
  return isPowerOfTwo(n/2);
}
