// I'm making a search engine called MillionGazillion™.

// I wrote a crawler that visits web pages, stores a few keywords in a database, 
//and follows links to other web pages. I noticed that my crawler was wasting a 
//lot of time visiting the same pages over and over, so I made a set, visited, 
//where I'm storing URLs I've already visited. Now the crawler only visits a URL 
//if it hasn't already been visited.

//Thing is, the crawler is running on my old desktop computer in my parents' 
//basement (where I totally don't live anymore), and it keeps running out of 
//memory because visited is getting so huge.

// How can I trim down the amount of space taken up by visited?

class Trie {
    constructor() {
        this.rootNode = {}
    }

    addWord(word) {
        let currentNode = this.rootNode;
        let isNewWord = false;

        // Work downwards through the trie, adding nodes
        // as needed, and keeping track of whether we add
        // any nodes.
        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!currentNode.hasOwnProperty(char)) {
                isNewWord = true;
                currentNode[char] = {}
            }

            currentNode = currentNode[char]
        }

        if (!currentNode.hasOwnProperty('End of Word')) {
            isNewWord = true;
            currentNode['End of Word'] = {}
        }
        return isNewWord
    }
}

const word = new Trie()
word.addWord('cakes')
word.addWord('cake')
//Breakdown

//Notice that a boatload of URLs start with "www."

//We could make visited a nested object where the outer key is the subdomain and 
//the inner key is the rest of the URL, so for example visited['www.']['google.com'] = true 
//and visited['www.']['interviewcake.com'] = true. Now instead of storing 
//the "www." for each of these URLs, we've just stored it once in memory. 
///If we have 1,000 URLs and half of them start with "www." then we've replaced
// 500 * 4 characters with just 4 characters in memory.

//But we can do even better.

//What if we used this same approach of separating out shared prefixes recursively? 
//How long should we make the prefixes?

//What if we made the prefixes just one character?

// Solution
// We can use a trie. If you've never heard of a trie, think of it this way:

// Let's make visited a nested object where each map has keys of just one character. 
//So we would store 'google.com' as visited['g']['o']['o']['g']['l']['e']['.']['c']['o']['m']['*'] = true.

// The '*' at the end means 'this is the end of an entry'. Otherwise we wouldn't 
//know what parts of visited are real URLs and which parts are just prefixes. 
//In the example above, 'google.co' is a prefix that we might think is a visited 
//URL if we didn't have some way to mark 'this is the end of an entry.'

// Now when we go to add 'google.com/maps' to visited, we only have to add the 
//characters '/maps', because the 'google.com' prefix is already there. 
//Same with 'google.com/about/jobs'.

// We can visualize this as a tree, where each character in a string corresponds 
//to a node.

// A trie is a type of tree.

//To check if a string is in the trie, we just descend from the root of the 
//tree to a leaf, checking for a node in the tree corresponding to each 
//character in the string.

// How could we implement this structure? There are lots of ways! We could use 
//nested objects, nodes and pointers, or some combination of the two. 
//Evaluating the pros and cons of different options and choosing one is a great 
//thing to do in a programming interview.

// In our implementation, we chose to use nested objects. To determine if a 
//given site has been visited, we just call addWord(), which adds a word to 
//the trie if it's not already there.

//Complexity O(n26^n) // assuming only 26 alphabetical character in englisj
// and not consider any other character

