let obj={p:['hello',{y:'world'}]};
let {p,p:[x,{y}]}=obj;
console.log(x,y,p);
