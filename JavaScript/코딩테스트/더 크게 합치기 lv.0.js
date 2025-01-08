function solution(a, b) {
    var answer = '';
    var arr1=[];
    var arr2=[];
    var x=0;
    var y=0;
    
    arr1[0]=a;
    arr1[1]=b;
    
    arr2[0]=b;
    arr2[1]=a;
    
    x=Number(arr1.join(''));
    y=Number(arr2.join(''));
    
    if(x>y){
        answer=x;
    }
    else{
        answer=y;
    }
    return answer;
}
