/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = j =0;
    let map = new Map();
    let max =0

    for(j =0;j<s.length;j++)
    {
        if(map[s[j]] != undefined && map[s[j]] >=i)
        {
            i = map[s[j]] + 1;
        }
        map[s[j]] =j;
        let currentSize = j - i +1;
        max = Math.max(max, currentSize);
        console.log(map, currentSize, max)


    }
    return max;
};

// am creating a new Map object in JavaScript. 
// A Map is a built-in data structure that stores key–value pairs.
//  Unlike a plain object {}, a Map remembers the insertion order of keys, and the keys can be of any type — not just strings.
//   I’ll use this map to keep track of values I need to look up quickly,
//  for example to check if a character has already appeared in a substring problem.