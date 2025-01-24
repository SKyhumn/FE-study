for(let i=100;i<=999;i++){
    let original_i=i;
    let sum=0;
    for(let digit of String(original_i)){
        sum+=Number(digit)**3;
    }
    if(sum==i){
        console.log(i);
    }
}
