let height=178;
let weight=79;

function measureBMI(height, weight){
    height/=100;
    let BMI=weight/(height**2);
    if(BMI>=26){
        console.log(BMI);
        console.log("비만");
    }
    else if(BMI>=24&&BMI<26){
        console.log(BMI);
        console.log("과체중");
    }
    else if(BMI>=18.5&&BMI<24){
        console.log(BMI);
        console.log("정상");
    }
    else{
        console.log(BMI);
        console.log("저체중");
    }
}

measureBMI(height, weight);
