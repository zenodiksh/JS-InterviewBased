"use strict";
// const myArray= [1,2,3,4,5,6,"diksh kaushik","cr7"]
// //array is resizable
// //their elements can be accessed by 
// console.log(myArray[4])

// //ways to create an aaarays
// const arr1=[1,2,3,4,5,6]
// const myArr2= new Array(1,2,3,4)
// const myHeroes=["shaktiman","batman","robin"]
// let myaaray=[6,5,8,9,0]
// console.log(myArr2)
// console.log(arr1)
// console.log(myHeroes)

// const newArr=[1,2,3,4,5]
// console.log(newArr)

// console.log(newArr.push(8))

// console.log(newArr.push(7))
// console.log(newArr.pop())
// console.log(newArr)
// console.log(newArr.unshift(4))

// console.log(newArr)
// console.log(newArr.shift())
// console.log(newArr)
// console.log(newArr.includes(3))
// console.log(newArr.indexOf(3))

// const string = newArr.join()
// console.log(string)

//splice and spice in arrays
// const newestArr=[1,2,3,4,5,6]
// console.log("A",newestArr)

// const myn1= newestArr.slice(2,5)
// console.log(myn1)

// const myn2= newestArr.splice(2,5)
// console.log(myn2)

//nested arrays
const marvel_heroes=["thor","ironman"]
const dc_heroes=["batman","superman","flash"]


//console.log(marvel_heroes.push(dc_heroes))

// console.log(marvel_heroes)
// console.log(marvel_heroes[2][1])

// const allheroes=(marvel_heroes.concat(dc_heroes))
// console.log(allheroes)
// instead of using this we can use spread operator

const allheeeerois=[...dc_heroes,...marvel_heroes] //power of spread oprerator in javascript

console.log(allheeeerois)

//rare case
const rare_array=[1,2,3,4,5,[23,45,[56,78]],7,9]
const real_array= rare_array.flat(Infinity)
console.log(real_array)

let score=980
let score2=456
let score3=334

console.log(Array.of(score,score2,score3   ))