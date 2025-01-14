function solution(code) {
    var answer = '';
    let mode=0;
    for(let a=0;a<code.length;a++){
        if(mode===0){
            if(a%2===0&&code[a]!=='1'){
                answer+=code[a];
            }
            else if(code[a]==='1'){
                mode=1;
            }
        }
        else if(mode===1){
            if(a%2!==0&&code[a]!=='1'){
                answer+=code[a];
            }
            else if(code[a]==='1'){
                mode=0;
            }
        }
    }
    return answer===""?"EMPTY":answer;
}
