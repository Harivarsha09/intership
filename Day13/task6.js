
function bmiCal(weight, height) {
    let bmi = weight / (height * height);
    if (bmi < 18.5){
        return "Your BMI is "+", so you are underweight.";
    } else if (bmi >= 18.5 && bmi <= 24.9){
        return "Your BMI is "+", so you have a normal weight.";
    } else{
        return "Your BMI is "+", so you are overweight.";
    }
}
let message = bmiCal(60, 1.7); 
console.log(message);