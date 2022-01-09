// You need to write regex that will validate a password to make sure 
// it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number

// Valid passwords will only be alphanumeric characters.

// Test.expect(validate('djI38D55'), 'djI38D55 - Expected true');
// Test.expect(!validate('a2.d412'), 'a2.d412 - Expected false');
// Test.expect(!validate('JHD5FJ53'), 'JHD5FJ53 - Expected false');
// Test.expect(!validate('!fdjn345'), '!fdjn345 - Expected false');

function validate(password) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password)
}

//using lookaheads in regex

// ^      start of input
// (?=.*?[A-Z]) lookahead to make sure there is at least one upper case letter
// (?=.*?[a-z]) lookahead to make sure there is at least one lower case letter
// (?=.*?[0-9]) lookahead to make sure tthere is at least one number
// [A-Za-z0-9]{6,} Make sure there is at least 6 characters of [A-Za-z0-9]
// $      end of input 

function validate1(password) {
    return password.length >= 6 &&
        /[a-z]/.test(password) &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /^[a-zA-Z0-9]+$/.test(password);
}

function validate2(password) {
    return /^[A-Za-z0-9]{6,}$/.test(password) &&
        /[A-Z]+/.test(password) &&
        /[a-z]+/.test(password) &&
        /[0-9]+/.test(password);
}

//+ Quantifier — Matches between one and unlimited times, as many times 
//as possible, giving back as needed (greedy)
//A-Z a single character in the range between A (index 65) and Z (index 90) 
//(case sensitive)

console.log(validate1('Swap1993'))