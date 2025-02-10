"use strict" ;
const score= 400
const balance = new Number(100) //explicitly casting
console.log(balance)
console.log(score)

console.log(balance.toString())
//console.log(balance.toString)
console.log(balance.toFixed(2)) //fixing the pricision value to 2 example 100.00

const anotherNumber = 128.8966
console.log(anotherNumber.toPrecision(3))


//
const hundreds =1000000
console.log(hundreds.toLocaleString())
console.log(hundreds.toLocaleString('en-US'))

