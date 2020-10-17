/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack=[];
    for(let i=0;i<s.length;i++){
        let c = s[i];
        if(c === '(' || c === '[' || c === '{'){
            stack.push(c);
        } else {
            const top = stack[stack.length - 1];
            if(
                (c === '}' && top === '{') ||
                (c === ']' && top === '[') ||
                (c === ')' && top === '(')
            ) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};

const result = isValid('()');
console.log(result);
