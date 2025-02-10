//this and arrow function in javascript

const user={
    username:"hitesh",
    price:899,

    welcomeMessage:function(){
        console.log(`${this.username}, welcome to javascript `)
       // console.log(this)
    }

}
// console.log(user.welcomeMessage())
// user.username="sam"
// console.log(user.welcomeMessage())

//console.log(this) //{} will be the output

//arrows in javascript

function chai(){
    let username="hitesh"
   // console.log(this)
}

//chai(); //a lot of values would be printed

const chais= function(){
    let username="random"
    //console.log(this.username) 
    return 0;

}
//console.log(chais()) //undefined  0
//arrow function syntax
const chainew= ()=>{
    let username="hitesh choudhary"
    console.log(this.username)
}
chainew() //undefined

const addtwo=(num1,num2)=>{

    return num1+num2
}
console.log(addtwo(7,8))

const addtwonumbers =(num1,num2)=> num1+num2 //no need to use return or curly brces 
//in the cse of single statements used 
console.log(addtwo(7,8))

const newobjinfn= ()=> ({username:"hitesh"})
console.log(newobjinfn())



