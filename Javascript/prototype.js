//javscript ko prototypal behaviour 
//prototype is also known as proto
//this topic is important for learning the backend behaviour of javscript
//go on console


//can i create my own prototypal properties
function Createuser(username,score){
    this.username=this.username
    this.score=this.score
}
//my own created method

Createuser.prototype.increament=function(){
    this.score++;
    //use this.score na ki score++
}

const chai=new Createuser("hitesh",45)
const tech=new Createuser("riki",34)

console.log(chai)

chai.increament()
console.log(chai)