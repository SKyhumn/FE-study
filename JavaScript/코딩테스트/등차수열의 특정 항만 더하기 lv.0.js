function solution(a, d, included) {
    var answer = 0;
    for(let x=0;x<included.length;x++){
        if(included[x]==true){
            answer+=(a+d*x);
        }
    }
    return answer;
}
