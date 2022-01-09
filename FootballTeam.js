function Team(player, count) {
    let numberArray = Array.from(Array(player).keys())
    console.log('---', numberArray)
    let currentIndex = 0;
    let maxIndex = numberArray.length - 1;
    let result = [];

    for (let i = currentIndex; i <= maxIndex; i++) {
        currentIndex += count;
        if (currentIndex <= maxIndex) {
            result.push(currentIndex)
        }
        else if (currentIndex > maxIndex && !result.includes(currentIndex)) {
            currentIndex = currentIndex - numberArray.length;
            result.push(currentIndex)
        }
    }
    return result.join(',')
}

console.log(Team(5, 2))  // output 2,4,1,3,0