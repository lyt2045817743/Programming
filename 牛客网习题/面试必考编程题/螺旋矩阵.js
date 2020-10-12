function spiralOrder( matrix ) {
    // write code here
    if(matrix.length===0){ return []; };
    if(!(matrix[0] instanceof Array)){ return matrix; };
    let beginX=0,beginY=0,n=matrix[0].length,m=matrix.length;
    let arr=[];
    
    function circleItem(beginX,beginY,n,m){
        let i=beginX,j=beginY;

        // 左->右
        while(i-beginY<n){
            arr.push(matrix[beginX][i]);
            i++;
        }

        // 上->下
        i--;
        while(j-beginY<m){
            j++;
            if(j-beginY<m){
                arr.push(matrix[j][i]);
            }
        }

        // 右->左
        j--;
        while(i>=beginY && j!==beginX){
            i--;
            if(i>=beginY){
                arr.push(matrix[j][i]);
            }
        }

        // 下->上
        while(j>beginX && n-2>=0){
            j--;
            if(j>beginX){
                arr.push(matrix[j][beginY]);
            }
        }
        
        // 递归  不断将内部最外环push到arr中
        beginY++;
        beginX=++j;
        if(beginY!==n+beginY-2 && n-2>0 && m-2>0){
            circleItem(beginX,beginY,n-2,m-2);
        }
    }
    circleItem(beginX,beginY,n,m);
    
    return arr;
}

let arr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]];
let result=spiralOrder(arr);
console.log(result);
