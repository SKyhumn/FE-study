let array=[10,20,30,60,40,100,70];

function TheBiggestNum(array){
    let num=0;
    for(let a=0;a<array.length;a++){
        if(num<array[a]){
            num=array[a];
        }
    }
    return num;
}

console.log(TheBiggestNum(array));
