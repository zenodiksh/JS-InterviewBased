//scoping in js
"use strict";

// const b=56
// var c=89

// // console.log(a)
// console.log(b)
// console.log(c)
 
// //scoping comes in {} only

// var c=100
// if(true){
//     let a=10
//     const b=89
//     var c=90
//     console.log(a)
// }
// //but var has a special  case it can be changed anyehree everwhere
// //console.log(a)//error due to a is not defined outside the scope

// console.log(b)
// console.log(c)

//nested scopes
function one(){
    const username= "hitesh"
    function two(){
        const website="youtube.com"
        console.log(username)
        


    }
    //two(); //hitesh would be printed
    //throws an errconsole.log(website)
}
one(); //agar main two() ko comment krdu nothing would be printed

//same nesting can be used with loops

//hoisting :mini

