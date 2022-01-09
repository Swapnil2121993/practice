// Your task in order to complete this Kata is to write a function which 
// formats a duration, given as a number of seconds, in a human - friendly way.

// The function must accept a non - negative integer.If it is zero, 
// it just returns "now".Otherwise, the duration is expressed as a combination 
// of years, days, hours, minutes and seconds.

//It is much easier to understand with an example:

//formatDuration(62)    // returns "1 minute and 2 seconds"
//formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"
//For the purpose of this Kata, a year is 365 days and a day is 24 hours.

// Note that spaces are important.

// Detailed rules
// The resulting expression is made of components like 4 seconds, 1 year, etc. 
// In general, a positive integer and one of the valid units of time, 
// separated by a space. The unit of time is used in plural if the integer 
// is greater than 1.

// The components are separated by a comma and a space (", "). 
// Except the last component, which is separated by " and ", just like it 
// would be written in English.

// A more significant units of time will occur before than a least significant one. 
// Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

// Different components have different unit of times. So there is not 
// repeated units like in 5 seconds and 1 second.

// A component will not appear at all if its value happens to be zero. 
// Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

// A unit of time must be used "as much as possible". It means that the 
// function should not return 61 seconds, but 1 minute and 1 second instead. 
// Formally, the duration specified by of a component must not be greater than 
// any valid more significant unit of time.

function formatDuration(num) {
    var seconds = num; var minutes = 0; var hours = 0; var days = 0; var years = 0;

    if (seconds === 0) {
        return "now";
    }

    else if (seconds === 1) {
        return "1 second";
    }

    else if (seconds < 60) {
        return seconds + " seconds";
    }

    if (seconds >= 60) {
        minutes = (num - num % 60) / 60;
        seconds = seconds - (minutes * 60);
    }

    if (minutes >= 60) {
        hours = (minutes - minutes % 60) / 60;
        minutes = minutes - (hours * 60);
    }

    if (hours >= 24) {
        days = (hours - hours % 24) / 24;
        hours = hours - (days * 24);
    }

    if (days > 365) {
        years = (days - days % 365) / 365;
        days = days - (years * 365);
    }

    var sentenceArr = [];
    var unitNames = ["years", "days", "hours", "minutes", "seconds"];
    var unitNums = [years, days, hours, minutes, seconds];

    for (var i in unitNums) {
        if (unitNums[i] !== 0) {
            if (unitNums[i] === 1) {
                sentenceArr.push(unitNums[i] + " " + unitNames[i].slice(0, -1) + ", ");
            } else {
                sentenceArr.push(unitNums[i] + " " + unitNames[i] + ", ");
            }

        }

    }

    var length = sentenceArr.length;

    if (length === 1) {
        return sentenceArr[0].slice(0, -2);
    }

    var lastUnit = sentenceArr[sentenceArr.length - 1];
    var secondToLastUnit = sentenceArr[sentenceArr.length - 2];
    var newLastUnit = " and " + lastUnit.slice(0, -2);
    var newSecondToLastUnit = secondToLastUnit.slice(0, -2);
    sentenceArr.splice(length - 2, 2, newSecondToLastUnit, newLastUnit);
    sentence = sentenceArr.join(seperator = "");

    return sentence;

}

function formatDuration1(seconds) {
    if (seconds == 0) return "now";
    var s = {
        "year": (60 * 60 * 24 * 365),
        "day": (60 * 60 * 24),
        "hour": (60 * 60),
        "minute": 60
    }
    var output = new Array();
    var years = Math.floor(seconds / s.year);
    if (years > 0) {
        output.push(years + " year" + (years == 1 ? "" : "s"));
        seconds = seconds % s.year;
    }
    var days = Math.floor(seconds / s.day);
    if (days > 0) {
        output.push(days + " day" + (days == 1 ? "" : "s"));
        seconds = seconds % s.day;
    }
    var hours = Math.floor(seconds / s.hour);
    if (hours > 0) {
        output.push(hours + " hour" + (hours == 1 ? "" : "s"));
        seconds = seconds % s.hour;
    }
    var minutes = Math.floor(seconds / s.minute);
    if (minutes > 0) {
        output.push(minutes + " minute" + (minutes == 1 ? "" : "s"));
        seconds = seconds % s.minute;
    }
    if (seconds > 0) {
        output.push(seconds + " second" + (seconds == 1 ? "" : "s"));
    }
    if (output.length > 1) {
        var last = output.pop();
        return output.join(", ") + " and " + last;
    } else {
        return output[0];
    }
}

console.log(formatDuration1(3650))