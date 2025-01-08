function solution(str1, str2) {
    var answer = [];
    for(let a=0;a<str1.length;a++){
        answer[a*2]=str1[a];
    }
    for(let b=0;b<str2.length;b++){
        answer[b*2+1]=str2[b];
    }
    return answer.join('');
}
