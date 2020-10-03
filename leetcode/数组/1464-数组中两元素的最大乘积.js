var maxProduct = function(nums) {
    nums.sort((a,b)=>{
        return a-b;
    })

    let len=nums.length;
    return (nums[len-1]-1)*(nums[len-2]-1);
};

let result=maxProduct([3,4,5,2]);
console.log(result);
