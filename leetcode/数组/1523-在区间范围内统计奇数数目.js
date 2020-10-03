var countOdds = function(low, high) {
    let index=low%2===1?low:low+1;
    let count=0;
    while(index<=high){
        count++;
        index+=2;
    }
    return count;
};
let result=countOdds(3,7);
console.log(result);
