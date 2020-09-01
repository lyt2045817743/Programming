var reverseLeftWords = function(s, n) {
    return s.slice(n,s.length).concat(s.slice(0,n));
};

let result=reverseLeftWords('lrloseumgh',6);
console.log(result);
