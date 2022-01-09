// Question: Given a string of angle brackets, write a function 
// that add brackets at the beginning and end of the string 
// to make all brackets match. The angle brackets match if 
// for every < there is a corresponding > and for every > 
// there is a corresponding <.

// The example input string : ><<><

// The output string is <><<><>>

const process = (str) => {
  let openCount = 0;
  let additionalLeadingOpenTags = 0;
  for (const char of str) {
    if (char === '>') {
      if (openCount === 0) {
        additionalLeadingOpenTags++;
      } else {
        openCount--;
      }
    } else {
      openCount++;
    }
  }
  return '<'.repeat(additionalLeadingOpenTags) + str + '>'.repeat(openCount);
};


console.log(process('><<><'))