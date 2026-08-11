// Leetcode Problem - 344
const str = ['m', 'a', 'n', 'i', 's', 'h'];

function reverse(str){
    const len = str.length;
    const halfLength = Math.floor(len/2);

    for(let i = 0; i<halfLength; i++){
        let temp = str[i];
        str[i] = str[len-1-i];
        str[len-1-i] = temp;
    }
}

console.log(reverse(str));
console.log(str);