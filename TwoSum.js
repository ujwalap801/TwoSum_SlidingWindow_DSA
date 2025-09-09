// BRUTE FORCE 
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++)
    {
for(let j=i+1;j<nums.length;j++)
{
    if(nums[i]+nums[j] === target)
    {
        return [i,j];
    }
}
    }
    
};


// OPTIMIZE

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
   
   let map ={}
   for(let i=0;i<nums.length;i++)
   {
map[nums[i]] =i
   }
    

    for(let j=0;j<nums.length;j++)
    {
        let diff = target -nums[j];
        if(map[diff] && map[diff] != j)
        {
            return [j, map[diff]];

        }
    }
};