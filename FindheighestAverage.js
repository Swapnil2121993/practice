// Here is a 2d array of student scores, student names might be repeated multiple times. 
//If this is the case, sum up all the scores and divide by the number of 
//occurrences to find the average, do the Math.floor if necessary.

// var arr = [
//     ["Bobby","87"],
//     ["Charles","100"],
//     ["Eric","65"],
//     ["Charles","22"],
//     ["Charles","37"],
//     ["Eric","49"]]
// So, Charles average score would be Math.floor((100+22+37)/3) = 53 And, for Eric it would be Math.floor((65+49)/2) = 57.

// So highest average would be ["Bobby","87"].

function findHeighestAverage(arr) {
    const scores = {}
    for (let i = 0; i < arr.length; i++) {
        const student = arr[i];

        if (!scores.hasOwnProperty(student[0])) {
            scores[student[0]] = []
            scores[student[0]].push(student[1])
            continue;
        }
        if (scores.hasOwnProperty(student[0])) {
            scores[student[0]].push(student[1])
        }
    }

    for (key in scores) {
        if (!scores.hasOwnProperty(key)) continue;

        var total = scores[key].reduce(function (next, cur) {
            return next + parseInt(cur)
        }, 0)

        scores[key] = Math.floor(total / scores[key].length)
    }
    return Object.values(scores).sort((a, b) => b - a)[0]
}

console.log(findHeighestAverage([["Bobby", "87"], ["Charles", "100"], ["Eric", "65"], ["Charles", "22"], ["Charles", "37"], ["Eric", "49"]]))