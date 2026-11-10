function sumOdd(arr, i = 0) {
  const size = arr.length;
  const isOdd = arr[i]%2 !=0 ? true : false;
  if(size == 0) return 0;
  else if(i == size -1) return isOdd ? arr[i]: 0;
  
  if(isOdd)
    return arr[i] + sumOdd(arr, i+1);
  else
    return 0 + sumOdd(arr, i+1);
}
