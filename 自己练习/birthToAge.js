function birthToAge(birthStr){
    if(!birthStr){ return '暂无' }
    return (new Date()).getFullYear() - Number(birthStr.substr(0,4))
}
console.log(birthToAge(''));

