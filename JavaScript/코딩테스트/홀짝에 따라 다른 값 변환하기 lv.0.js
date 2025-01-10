function solution(n) {
    var answer = 0;
    let a=0;
    if(n%2==1){
        while(a<=n){
            if(a%2==1){
                answer+=a;
            }
            a++;
        }
    }
    else{
        while(a<=n){
            if(a%2==0){
                answer+=a**2;
            }
            a++;
        }
    }
    return answer;
}
