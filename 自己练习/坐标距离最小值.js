// [[0,0],[0,3],[4,0]]
function minInstance(arr){
    let min=Infinity;
    let instrance=0;
    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            instrance=Math.sqrt(Math.pow((arr[j][0]-arr[i][0]),2)+Math.pow((arr[j][1]-arr[i][1]),2));
            instrance=Math.round(instrance);
            if(instrance<min){
                min=instrance;
            }
        }
    }
    return min;
}

let result=minInstance([[0,0],[0,3],[4,0],[-1,-1]]);
console.log(result);
