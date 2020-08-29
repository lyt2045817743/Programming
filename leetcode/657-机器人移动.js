var judgeCircle=function(moves){
    let movesArr=moves.split('');
    let position=[0,0];
    movesArr.forEach((item)=>{
        switch(item){
            case 'U':position[0]--;break;
            case 'D':position[0]++;break;
            case 'L':position[1]--;break;
            case 'R':position[1]++;break;
            default:break;
        }
    })
    if(position[0]==0&&position[1]==0){
        return true;
    }
    else{
        return false;
    }
}

console.log(judgeCircle('UD'));
