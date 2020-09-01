function maxMoney(arr){
    let moneyObj={'A':10,'B':25,'C':15,'D':30,'E':40,'F':30};
    let max=0;
    arr.forEach((item)=>{
        let sum=0;

        item.forEach((val)=>{
            sum+=moneyObj[val];
        })

        if(sum>max){
            max=sum;
        }
    })
    return max;
}

let result=maxMoney([['C'],['E']]);
console.log(result);
