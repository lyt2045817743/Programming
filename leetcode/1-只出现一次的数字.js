// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// 说明：
// 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？
// 示例 1:
// 输入: [2,2,1]
// 输出: 1
// 示例 2:
// 输入: [4,1,2,1,2]
// 输出: 4

//位运算
// var singleNumber = function(nums) {
//     let temp=0;
//     for(let i=0;i<nums.length;i++){
//         temp^=nums[i];
//     }
//     return temp;
// };

//hash
// var singleNumber = function(nums) {
//     let obj={};
//     for(let i=0;i<nums.length;i++){
//         if(obj[nums[i]]){
//             delete obj[nums[i]];
//         }
//         else{
//             obj[nums[i]]=nums[i];
//         }
//     }
//     return Object.keys(obj)[0];
// };

//先排序,再比较
// var singleNumber = function(nums) {
//     nums=nums.sort(function(a,b){
//         return a-b;
//     });
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]!=nums[i+1]&&nums[i]!=nums[i-1]){
//             return nums[i];
//         }
//     }
// };

//用indexOf()
var singleNumber = function(nums) {
    for(let i=0;i<nums.length;i++){
        if(nums.indexOf(nums[i])==nums.lastIndexOf(nums[i])){
            return nums[i];
        }
    }
};


let result=singleNumber([2,4,1,2,1]);
console.log(result);
