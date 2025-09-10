/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(num, target) {
let i=0;
let j=num.length-1;

while(i<j)
{
    let sum = num[i]+num[j];
  
    if(sum > target)
    {
        j--;
    }else if(sum <  target)
    {
        i++;
    }
    else{
        return [i+1, j+1]
    }
}
    
};