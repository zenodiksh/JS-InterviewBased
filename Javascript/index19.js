"use strict";
//higher order loops specially made for arrays only 
//1)for of loop
const arr=[1,2,3,4,5]
for (const item of arr) {
    //console.log(item);
    
}
const greetings="hello world!"
for (const items of greetings) {
    //console.log(items)
    
}
//2)maps in javascipt
 //map is an special object in javscript that holds the keyvalue pair..
//do not holds duplication of key and values pair
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


 console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//how it works for objects
 const myobject={
    'game1':"nfs",
    'game2':"spiderman"
}
//for(const [key,value] of myobject){
    //console.log(key,":->",value);
    
//}
// ///    eroorrrrrrrr u cant use[key,value in case of objects]
//for of loop cannot be used to iterate objects

const newobjects=
{
    js:"javascript",
    rb:"ruby",
    swift:"swift by apple"

}
//for in loop is used to iterate over objects 
for (const key in newobjects) {
  
        // const element = newobjects[key];
        // console.log(`elements are ${element}`)
        console.log(`${key} means as ${newobjects[key]} `);
        
        
    }
    //can we apply for in loop for arrays 
    const programming=["js","ruby","perl"]
    for (const key in programming) {
        //console.log(key);//0 1 2
        //console.log(programming[key]);
        
        
    }
    //can this for in  loop works for maps 
    //no, maps are not iterable by this 
    
//for each loop
const coding=["js","ruby","java ","python","cpp"]
//" kuch loops arrays ki properties k tarah use hote hai"
//coding.forEach(call back fn without name)
coding.forEach( function(item){
    //console.log(item);

});
//we can use arrow functions also
// coding.forEach( (item)=>console.log(item))
//more vaiations

function mynameissthing(item){
    console.log(item);


}
coding.forEach(mynameissthing)//fn ka khali naam dena h bs call ni krna
//for each loop can accept many parameters
coding.forEach(
    (item,index,arr)=>{
        console.log(item,index,arr)
    }
)

//agar array ke andar objects ho phir[{},{},{}]
const mycoding=[
    {
        langname:"javascript",
        extension:"js",
    },
    {
        langname:"cpluplus",
        extension:"cpp",
    },
    {
        langname:"pyton",
        extension:"py",
    }


]
mycoding.forEach(
    (item)=>{
        console.log(`value pairs from ${item.langname} is given by ext ${item.extension}`)
    }
)

    






