function to2(num){
    const stack = [];
    while(num){
        stack.push(num % 2);
        num = parseInt(num / 2);
    }
    
    let result = '';
    while(stack.length>0){
        result = result  + stack.pop();
    }
    
    return parseInt(result);
}

const result=to2(100);
console.log(result);
