
// IN BUILT
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};


// SLIDING WINDOW

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(s, t) {
let n = s.length;
let m = t.length;

for(let i=0;i<=n-m;i++)
{

let j=0;
for(j=0;j<m; j++)
{
    if(s[i+j] != t[j])
    {
        break;
    }
}

if(j === m)
{
    return i
}
}

return -1;

};