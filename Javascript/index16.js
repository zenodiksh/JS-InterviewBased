//control flow
const isLoggedin= true
if(isLoggedin){
  console.log(`user is signed in `)
}
const temperature =78
if(temperature===41){
    console.log(`it is a hot day`)
}
console.log(`code outside will always be executed`)

if(temperature===41){
    console.log(`less than 50`)
}
else{
    console.log(`the temperature is okaish`)
}

const score=200;
if(score>150){
    let power="fly"
    console.log(`the user won the match with help of ${power}`)
}
// this line would work only for var keyword in fn scope console.log(`${power}`)
//nesting and multiple conditions 
let balance=678
if(balance>500 ){
    console.log(`less than `)
}
else if(balance<750){
    console.log(`less than 750`)
}
else if(balance<900){
     console.log(`less than 900`)
    }
else{
    console.log(`less than 1200`)
} //only 1st loop will run 

const userloggedin=true
const debitcard=false
if(userloggedin || debitcard){
    console.log(`ok u may purchase the course`)
}

//switch statement in javascript
const month=3
switch(month){
    case 1:
        console.log("jan") 
        break;
    
    case 2:
        console.log("feb") 
        break;
    case 3:
        console.log("march")
        break;
    
    default:
        console.log(`default case`);
        
}
