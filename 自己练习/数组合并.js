
function merge( A, m, B, n ) {
    // write code here
    let currentIndex=0;
    for(let i=0;i<n;i++){
        if(m===0){
            A.push(B[i]);
            m++;
        }
        else{
            let j;
        for(j=currentIndex;j<m;j+=1){
            if(B[i]<A[j]){
                A.splice(j,0,B[i]);
                currentIndex=j;
                m++;
                break;
            }
        }
        if(j===m){
            A.push(B[i]);
            m++;
        }
        }
        
    }
    return A;
}
console.log(merge([],0,[1],1));