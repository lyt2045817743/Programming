var runningSum = function(nums) {
    let newArr=[];
    for(let i=0;i<nums.length;i++){
        let sum=0;
        for(let j=0;j<i+1;j++){
            sum+=nums[j];
        }
        newArr.push(sum);
    }
    return newArr;
};

let result=runningSum([3,1,2,10,1]);
console.log(result);
