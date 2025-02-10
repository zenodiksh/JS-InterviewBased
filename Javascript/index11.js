//functions in javascript

function sayMyname(){//funcn prototype/definition
    console.log("hitesh choudhary sir")
}

sayMyname()//fn call
function addtwo(n1,n2){
    console.log(n1+n2)
}
addtwo()//nan
addtwo(3.6,7.8)
addtwo(4,6)
const result= addtwo(56,78) //134 output
console.log(result)//undefuned output mey aayega
//if you really want to use result vriable then 

function addtwonumbers(num1,num2){
    let result= num1+num2
    return result

    console.log("hitesh would never be printed");
    
}
//You can only store your function inside a variable only if function is using a 
//return keyword
const answer =addtwonumbers(3,89)
console.log(`result is ${answer}`)

function loginusernamemessage(username){
    if(username===undefined) //or (!username )
    {
        return `please enter a username`
    }
    return `hi ${username}`
}
const result1 =loginusernamemessage()
const result2 =loginusernamemessage("diksh kaushik")

console.log(result1)
console.log(result2)

//function with objects and arrays 
 function calculateCart(item1){
    return item1

 }
 console.log(calculateCart(56,890,7890))//arisesa problem
 function newCart(...items){
    return items

 }
 console.log(newCart(56,890,7890)) //automatically an array is generted
 //now by traversal of array we can add each item

//  const user1=
//  {  
//     username:"hitesh",
//     price:"999"

//  }
//  function handleObject(anyobject){
//     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

//  }

//  handleObject(user1)
 
//you can use whole object as a parmaeter also
const user1=
 {  
    username:"hitesh",
    price:"999"

 }
 function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)

 }
 handleObject({
    username:"sam",
    price:"1000"

 })
 