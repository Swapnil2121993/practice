// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except 
// for the last two names, which should be separated by an ampersand.

// Example:
// list([ {name: 'Bart'}, {name: 'Lisa'}, {name: 'Maggie'} ])
// returns 'Bart, Lisa & Maggie'

// list([ {name: 'Bart'}, {name: 'Lisa'} ])
// returns 'Bart & Lisa'

function list(names) {
    const arrayList = names.map(value => value.name)
    if (arrayList.length === 0) {
        return ''
    }
    else if (arrayList.length === 1) {
        return arrayList[0]
    }
    else if (arrayList.length === 2) {
        return arrayList.join(' & ')
    }
    else {
        const string1 = arrayList.slice(0, arrayList.length - 1).join(', ')
        const string2 = ' & ' + arrayList.slice(-1)
        return string1 + string2
    }
}

function list1(names) {
    return names.reduce(function (prev, current, index, array) {
        if (index === 0) {
            return current.name;
        }
        else if (index === array.length - 1) {
            return prev + ' & ' + current.name;
        }
        else {
            return prev + ', ' + current.name;
        }
    }, '');
}

// pop modifies original array
function list2(names) {
    var xs = names.map(p => p.name)
    var x = xs.pop()
    return xs.length ? xs.join(", ") + " & " + x : x || ""
}

console.log(list1([{ name: 'Bart' }, { name: 'swapnil'}, { name: 'neel'}, { name: 'nisarg'}]))