//this keyword in javascript
//it tells you about the current execution context
//cec
// function callme(){
//     console.log(`call me this`)

// }
// function  obey(){
//     callme()

// }
//if call me fn contains the who would it will be reffering to
//refer to gec,else it woul refer to cec

function setUsername(username){
    //complex db calling
    this.username=username
}
function createuser(username,email,passwd){
    this.email=email;
   
    this.psswd=passwd;
    // this.username=username;
    setUsername(username)
}
const chai= new createuser("chai","chai@facebook.com","123");
console.log(chai)
//output->createuser { email: 'chai@facebook.com', psswd: '123' }
//how do i call username now in same code
function ssetUsername(username){
    //complex db calling
    this.username=username
}
function ccreateuser(username,email,passwd){
    ssetUsername.call(this,username)
    this.email=email;
   
    this.psswd=passwd;
    // this.username=username;
   
}
const cchai= new ccreateuser("hitesh","chai@fk.com","123");
console.log(cchai)



