class Stack{
    constructor(){
        this.value=[];
    }
    push = function(item){
        this.value.push(item);
    }
    pop = function(){
        return this.value.pop();
    }
    peek = function(){
        return this.value[this.value.length - 1];
    }
}