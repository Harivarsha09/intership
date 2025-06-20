function bmical(weigth,height){
    var bmi=weigth/(height*height);
    return Math.round(bmi);
}
var bmi=bmical(65,1.8);
console.log(bmi);