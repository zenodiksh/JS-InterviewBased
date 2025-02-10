"use strict";
//for loop is the most jumped loop
//i=inex/iterartive variable
for(let i=0;i<=10;i++){
    //console.log(`outerloop`)
    for(let j=0;j<=10;j++){
       // console.log(`*`);
    }
}

//printing the table from 1to 10 in javascript
for(let i=1;i<11;i++){
    //console.log(`outer loop ${i}`);
    for(let j=1;j<=10;j++){
        //console.log(i+" x "+j+ "=" + i*j);
    }
}
//for loops basically works best in the case of the arrays 
let myArrays= ["flash","zeno","batman"]
for(let i=0;i<= myArrays.length;i++){
    //console.log(`the values are `)
    let arrayelement= myArrays[i];
    //console.log(arrayelement)
}
//
//braek and continue in javascript

for (let i = 1; i <= 20; i++) {
      if(i==5){
        console.log(`5 is detected`);
        break;
      }
      console.log(`value is ${i}`);
      

    
    
}
for (let i = 1; i <= 20; i++) {
    if(i==5){
      console.log(`5 is detected`);
      continue ;
    }
    console.log(`value is ${i}`);
}
//while and do while loops
let i=0;
while(i<=10){
    console.log(`value of i is ${i}`);
    i++;
}
let myArr2=["flash","superman","batman"]
let arr=0;
while(arr<myArr2.length){
    console.log(`value of ${myArr2[arr]}`);
     arr++;
}

//do while
let score=100;

do{
    console.log(`the score is ${score}`)
    score++

}while(score<=10);