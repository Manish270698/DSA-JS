/*
    *
   **
  ***
 ****
*****
*/

const n = 5;

for (let i = 0; i < n; i++) {
  const row = "";

  for (let j = 0; j < n - (i + 1); j++) {
    row += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }
  console.log(row);
}
