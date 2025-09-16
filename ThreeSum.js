let arr = [-1,0,1,2,-1,-4];


function ThreeSum(arr) {
    arr.sort((a, b) => a - b); 
    let ans = [];

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; 

        for (let j = i + 1; j < arr.length - 1; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) continue; 
            for (let k = j + 1; k < arr.length; k++) {
                if (k > j + 1 && arr[k] === arr[k - 1]) continue; 

                if (arr[i] + arr[j] + arr[k] === 0) {
                    ans.push([arr[i], arr[j], arr[k]]);
                }
            }
        }
    }

    return ans;
}


console.log(ThreeSum(arr))


// USing TwoSUm

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        if (i === 0 || nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans);
        }
    }
    return ans;
};
var twoSum = function(arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;
    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];
        if (sum > 0) {
            j--;
        } else if (sum < 0) {
            i++;
        } else {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;
            j--;
            while (i < j && arr[i] === arr[i - 1]) {
                i++;
            }
        }
    }
};