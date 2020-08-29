var intersect = function(nums1, nums2) {
    let C = [];
    let j=0;
    for(let i = 0; i<nums1.length; i++) {
        let A = nums1[i]
        let B = nums2[j]
        if(A==B) {
            C.push(A)    
            j++;
        }
    }
    return C;
};
let arr = [1,2,2,1]
let arr0 = [2,2]
let arr1 = intersect(arr,arr0)
console.log(arr1)
