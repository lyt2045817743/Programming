var numIdenticalPairs = function(nums) {
    let count=0;
    for(let i=0;i<nums.length;i++){
        let nextIndex=nums.indexOf(nums[i],i+1);
        while(nextIndex!==-1){
            count++;
            nextIndex=nums.indexOf(nums[i],nextIndex+1);
        }
    }
    return count;
};

let nums = [1,2,3];
let result=numIdenticalPairs(nums);
console.log(result);
