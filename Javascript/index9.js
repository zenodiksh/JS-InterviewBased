"use strict";
//singleton
//Object.create()
//object literals

const mySym= Symbol("key1")



const JsUser={
    "key": "value ", //pair
     age: 56,
     location:"totronto",
     name:"diksh",
     email:"dikshkaushik111@gmail.com",
     isLoggedin:false,
     "fullname":"diksh kaushik",
     [mySym]:"myKey1"

}
//accessing values of objects in javascriot
console.log(JsUser.email)
console.log(JsUser["email"])//this is a better way
console.log(JsUser["fullname"])


console.log(JsUser[mySym])//thats how you use a symbol inside an object remember ii must be de
//fined earlier 
//changing values

JsUser.email= "hitesh@chatgpt.com"
console.log(JsUser["email"])

//Object.freeze(JsUser)
//now if you change the value of email it cannot be changed it 
//will remain as hitesh@chatgpt.com

//adding something in objects



JsUser.greeting = function(){//comment out freeze first
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
//more on objects

const tinderUser= new Object() //as a singleton construtor
const tinderUser2= {} //s a literal

console.log(tinderUser)
console.log(tinderUser2)

tinderUser.name="diksh"
tinderUser.email="anyrandom@gmail.com"
tinderUser.Id=123
tinderUser.isLoggedin=false

console.log(tinderUser)

//const newtinderuser=[...tinderUser,...tinderUser2] //error becoz we are using aaray
//we should use object in spread {} insted of this []
//console.log(newtinderuser)
//nested objects

const regularUser={
    email:"diksh@gmail.com",
    fullname:{
        userfullname:{
            firstName:"diksh",
            secondName:"kaushik"
        }
    }
}
//how do i access values 

console.log(regularUser.email)
console.log(regularUser.fullname.userfullname.secondName)
//adding 2 objects in javascript 
//but use spread operator in js 
const obj1={
    1:"one",
    2:"two"
}
const obj2={
    3:"one",
    4:"three"
}

const obj3= Object.assign({},obj1,obj2)
console.log(obj3)

//doing it with the help of spread operator now 
const obj4={...obj1,...obj2}
console.log(obj4);

//generally database se ham values nikalte h 
const users=[
{
   id:"123abx",
   name:"diksh"

}
,
{
    id:"1456abx",
   name:"crikd"

}
]
console.log(users[1].name)
//chlo ab tinderuser la istemal krte h 
console.log(tinderUser)

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(Object.hasOwnProperty('isLoggedin'))//asking a questooin

