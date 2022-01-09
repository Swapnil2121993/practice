// You own a Goal Parser that can interpret a string command. 
// The command consists of an alphabet of "G", "()" and/or "(al)" 
// in some order. The Goal Parser will interpret "G" as the 
// string "G", "()" as the string "o", and "(al)" as the string "al". 
// The interpreted strings are then concatenated in the original 
// order.

// Given the string command, return the Goal Parser's 
// interpretation of command.

// Example 1:

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:
// G -> G
// () -> o
// (al) -> al
// The final concatenated result is "Goal".
// Example 2:

// Input: command = "G()()()()(al)"
// Output: "Gooooal"
// Example 3:

// Input: command = "(al)G(al)()()G"
// Output: "alGalooG"

var interpret = function(command) {
   let result = '';
  // loop through the command characters
  for (let i = 0; i < command.length; i++) {
    // if we see an open bracket
    if (command[i] === '(') {
      // check for a closing bracket
      if (command[i + 1] === ')') {
        // if the opening bracket is followed directly by the closing bracket
        // append an o to the return string
        result += 'o';
		// small optimization
		// the next character was just checked, so we can skip it
		i++;
      }
    } else if (command[i] !== ')') {
      // otherwise, if the current character is not a bracket, just append the letter
      result += command[i];
    }
  }
  return result;
};

var interpret1 = function(command) {
    return command.replace(/\(\)/g,"o").replace(/\(al\)/g,"al")
}

console.log(interpret1('G()()()()(al)'))
