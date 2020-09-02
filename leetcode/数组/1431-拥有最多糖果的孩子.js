var kidsWithCandies = function(candies, extraCandies) {
    let max=Math.max(...candies);
    let isMost=[];

    for(let i=0;i<candies.length;i++){
        if(candies[i]+extraCandies>=max){
            isMost[i]=true;
        }
        else{
            isMost[i]=false;
        }
    }
    return isMost;
};

let candies =[4,2,1,1,2];
let extraCandies = 1;
let result=kidsWithCandies(candies,extraCandies);
console.log(result);
