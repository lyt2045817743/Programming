// var twoSum = function(numbers, target) {
//     let index2;
//     for(let i=0;i<numbers.length;i++){
//         if(numbers[i]>target/2){
//             break;
//         }else{
//             index2=numbers.indexOf(target-numbers[i],i+1)
//             if(index2!==-1){
//                 return [i+1,index2+1]
//             }
//         }
//     }
// };

// 二分查找
var twoSum = function(numbers, target) {
    let left=0,right=numbers.length-1,mid=0;
    for(let i=0,len=numbers.length;i<len;i++){
        left=i+1;
        let num2=target-numbers[i];
        while(left<=right){
            mid=parseInt((right-left)/2)+left;
            console.log(mid,num2);
            
            if(numbers[mid]==num2){ return [i+1,mid+1] }
            else{
                num2>numbers[mid]?left=mid+1:right=mid-1;
            }
        }
    }
};

let result=twoSum([2,3,4],6);
console.log(result);
