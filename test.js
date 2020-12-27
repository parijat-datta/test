function test (a, b){

let i;

let secondResult=0;
for (i=0;i<a.length;i++){
     
let firstResult= a[i]*b;
secondResult=secondResult+firstResult;
}
return secondResult;
}


var getResult=test([1,2,3],2);
console.log(getResult);
