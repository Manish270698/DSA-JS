function sumArray(arr, i = 0) {
  if(arr.length === 0) return 0;
  if(i=== arr.length - 1) return arr[i];
  console.log(i)
  return arr[i] + sumArray(arr, i+1)
}
