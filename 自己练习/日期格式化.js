
function toChinese(dateStr){
    const yearStr = dateStr.substr(0,4);
    const monthStr = dateStr.substr(5,2);
    const dayStr = dateStr.substr(8,2);
    return yearStr+'年'+monthStr+'月'+dayStr+'日';
}

const res = toChinese('2020-11-13 16:15:00');
console.log(res);
