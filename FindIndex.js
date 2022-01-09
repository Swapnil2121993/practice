// [1,3,5,7] // target num 5 -> return 2
//[1,5,7,8] // target num 2 =>return 1

function targetNum(arr, target) {
    let floorIndex = 0;
    let ceilingIndex = arr.length - 1;

    while (floorIndex < ceilingIndex) {

        // Guess a point halfway between floor and ceiling
        const guessIndex = Math.floor(floorIndex + ((ceilingIndex - floorIndex) / 2));
        const guessValue = arr[guessIndex]

        // If guess comes after first word or is the first word
        if (guessValue > target) {

            // Go right
            ceilingIndex = guessIndex;
        } else {

            // Go left
            floorIndex = guessIndex;
        }

        // If floor and ceiling have converged
        if (floorIndex + 1 === ceilingIndex) {

            // Between floor and ceiling is where we flipped to the beginning
            // so ceiling is alphabetically first
            break;
        }
    }

    return floorIndex;
}

console.log(targetNum([1,3,5,7], 7))