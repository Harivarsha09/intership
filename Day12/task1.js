function test(a,b){
    let c=a;
    a=b;
    b=c;
    console.log(a);
    console.log(b);
}
let a=3;
let b=8;
test(a,b);