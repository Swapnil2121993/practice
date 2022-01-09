// find number of occurences of character in a given string and print the count 
// along with character. If character only appearing one time than only print 
// character

//Example:
// Input: 'aaabccde'
// output: 'a3bc2de'

function countTheCharacter(string) {
    let count = 0;
    let result = string.split('');
    let current = result[0];
    let output = new Array()

    for (let i = 0; i <= result.length; i++) {
        if (current === result[i]) {
            count++
        } else {
            if (count === 1) {
                output.push(current)
            }
            if (count > 1) {
                output.push(current)
                output.push(count)
            }
            count = 1;
            current = result[i];
        }
    }
    return output.join('')
}

console.log(countTheCharacter('aaabccd'))