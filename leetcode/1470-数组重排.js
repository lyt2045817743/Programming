var shuffle=function(arr,n){
    var newArr=[];
    for(var i=0;i<n;i++){
        newArr.push(arr[i]);
        newArr.push(arr[i+n]);
    }
    return newArr;
}

var newArr=shuffle([1,2,3,4,4,3,2,1],4);
console.log(newArr);
