//Your company built an in-house calendar tool called HiCal. You want to 
//add a feature to see the times in a day when everyone is available.

//To do this, you’ll need to know when any team is having a meeting. 
//In HiCal, a meeting is stored as objects ↴ with integer properties 
//startTime and endTime. These integers represent the number of 30-minute 
//blocks past 9:00am.

//For example:

//{ startTime: 2, endTime: 3 }  // meeting from 10:00 – 10:30 am
//{ startTime: 6, endTime: 9 }  // meeting from 12:00 – 1:30 pm

//Write a function mergeRanges() that takes an array of multiple meeting 
//time ranges and returns an array of condensed ranges.

//For example, given:

//   [
//   { startTime: 0,  endTime: 1 },
//   { startTime: 3,  endTime: 5 },
//   { startTime: 4,  endTime: 8 },
//   { startTime: 10, endTime: 12 },
//   { startTime: 9,  endTime: 10 },
// ]

//your function would return:

// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]

//Do not assume the meetings are in order. The meeting times are coming 
//from multiple teams.

//Write a solution that's efficient even when we can't put a nice upper 
//bound on the numbers representing our time ranges. Here we've simplified 
//our times down to the number of 30-minute slots past 9:00 am. But we 
//want the function to work even for very large numbers, like Unix timestamps. 
//In any case, the spirit of the challenge is to merge meetings where startTime 
//and endTime don't have an upper bound.

function mergeRanges(meetings) {

    // Create a deep copy of the meetings array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign#Deep_Clone
    const meetingsCopy = JSON.parse(JSON.stringify(meetings));

    // Sort by start time
    const sortedMeetings = meetingsCopy.sort((a, b) => {
        return a.startTime - b.startTime;
    });

    // Initialize mergedMeetings with the earliest meeting
    const mergedMeetings = [sortedMeetings[0]];

    //start with index 1 to compare current meeting with previous meeting
    for (let i = 1; i < sortedMeetings.length; i++) {
        const currentMeeting = sortedMeetings[i];
        const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

        // If the current meeting overlaps with the last merged meeting, use the
        // later end time of the two
        if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
            lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime);
        } else {

            // Add the current meeting since it doesn't overlap
            mergedMeetings.push(currentMeeting);
        }
    }

    return mergedMeetings;
}

console.log(mergeRanges([{ startTime: 0, endTime: 1 },
{ startTime: 3, endTime: 5 },
{ startTime: 4, endTime: 8 },
{ startTime: 10, endTime: 12 },
{ startTime: 9, endTime: 10 },]))

//Complexity
//O(nlgn) time and O(n) space.

//Even though we only walk through our array of meetings once to merge them, 
//we sort all the meetings first, giving us a runtime of O(nlgn). 
//It's worth noting that if our input were sorted, we could skip the sort 
//and do this in O(n) time!

//We create a new array of merged meeting times. In the worst case, none of 
//the meetings overlap, giving us an array identical to the input array. 
//Thus we have a worst-case space cost of O(n).

// Bonus
// What if we did have an upper bound on the input values? Could we improve our runtime? Would it cost us memory?
// Could we do this "in place" on the input array and save some space? 
// What are the pros and cons of doing this in place?
// What We Learned
// This one arguably uses a greedy ↴ approach as well, except this time we had to 
//sort the array first.

// How did we figure that out?

// We started off trying to solve the problem in one pass, and we noticed that 
//it wouldn't work. We then noticed the reason it wouldn't work: to see if a given 
//meeting can be merged, we have to look at all the other meetings! That's 
//because the order of the meetings is random.

//That's what got us thinking: what if the array were sorted? We saw that then a 
//greedy approach would work. We had to spend O(nlgn) time on sorting 
//the array, but it was better than our initial brute force approach, which cost 
//us O(n^2) time!