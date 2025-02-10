"use strict";

// const name="diksh kaushik"
// console.log("the string is "+ name)
// console.log(`the string is ${name}`)

// const gameName= new String("0123jgfwf45577")

// console.log(typeof(name))

// console.log(typeof String) //string is a typr of function


// let str1="jkashmirih"
// console.log(str1[0])
// console.log(str1.__proto__) //strig ka prototype is an object

// console.log(str1.length)

//usages of string

let gamename="fidechampgukesh"
console.log(gamename.toUpperCase()) //FIDECHAMPGUKESH
console.log(gamename.charAt(4)) //c
console.log(gamename.indexOf('h')) //c

//slicing in string
const namestring= gamename.substring(0,4)
console.log(namestring)
console.log(gamename.substring(-8,4))

console.log(gamename.slice(0,7))

const newstring= "     diksh kaushik"
console.log(newstring)
console.log(newstring.trim())


const url="https://diksh.com/diksh%20kaushik"
console.log(url.replace('%20','-'))

console.log(url.includes("diksh")) //boolean rseult




