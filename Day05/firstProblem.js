function getMaxSeat(input) {
    return input.split('\n').map(getPlace).sort((a,b)=>b-a)[0]
}

function getPlace(input) {
    return getNumber(input.slice(0,7),127,0,'F') * 8 + getNumber(input.slice(7),7,0,'L')
}

function getNumber(input,max,min,char) {
    for(let i = 0; i < input.slice(0,7).length; i++){
        if(input[i] === char){
            max -= Math.ceil((max - min) / 2);
        }else {
            min += Math.ceil((max - min) / 2) 
        }
    }
    return min
} 