/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(arr) {

    let i =0;
    let j=  arr.length -1;
    let maxWater = 0;
    while(i < j)
    {
        let area = Math.min(arr[i], arr[j]) * (j-i);

        maxWater = Math.max(maxWater, area);
          if(arr[i] < arr[j])
          {
            i++;
          }
          else{
            j--;
          }

    }

    return maxWater;
    
};


let arr =[1,8,6,2,5,4,8,3,7];

function Water(arr)
{
    let maxWater =0;
    for(let i=0;i<arr.length;i++)
    {
       for(let j=i+1;j<arr.length;j++)
       {
        let area = Math.min(arr[i], arr[j]) * (j-i);
        // console.log(area);
        maxWater = Math.max(maxWater, area);
       }
    }

    return maxWater;
}


console.log(Water(arr));