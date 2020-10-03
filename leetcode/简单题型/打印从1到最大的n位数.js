// var printNumbers = function(n) {
//     let arr=[];
//     let count=Math.pow(10,n);
//     for(let i=1;i<count;i++){
//         arr.push(i);
//     }
//     return arr;
// };

function printNumbers(n){
    return Array.from({length:Math.pow(10,n)-1},(item,index)=>index+1);
}

let result=printNumbers(2);
console.log(result);
