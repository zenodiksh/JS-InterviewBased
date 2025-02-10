//filter ,map and Reduce in javascript
const coding=["js","ruby","java","python","cpp"]
const values=coding.forEach(
    (item)=>{
        console.log(item) // js ruby ....
    }
)
console.log(values) //undefinded
//the above statement is a problem...
//forEach return nothing,this is a problem cause we dont want to print our itms evrytime we wan
//want to use it gor vontrol flow purposes.
//how do i make above statement working
const myNums=[1,2,3,4,5,6,8,9]
const newnums=myNums.filter((num)=>{
    if (num>4){
        return num
    }

})
console.log(newnums)
   
//using forEach for returning values
const mynumses=[1,2,3,4,5,6,7,8,9]
const newnumses=[]
mynumses.forEach(
    (num)=>{
        if(num>4){
            newnumses.push(num)
        }
    }
)
console.log(newnumses)
//thts how you use filter and for each
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
let userusage =mycoding.filter((lang)=>{
    console.log(lang)
}

)

//maps in array dont confuse with Map() object
const mynumbers=[1,2,3,4,5,6,7,8,9]
const newest=mynumbers.map((num)=> num+10)
console.log(newest)
//chaining method

const somethingnew=mynumbers.map((num)=>num*10)
.map((num)=> num+1)
.filter((num)=>num>=40)
console.log(somethingnew)

//maps mein operation karan hmesha arrays ke 
//aur 
//filter mein printing ya true false vali values

//reduce ki kahani(shopping carts mein istemaal ho sakta h)
const myname=[1,2,3]
const myTotal=myname.reduce(function(accumulator,cuurvalue,){
    console.log(`ac:${accumulator} and the cuurent is ${cuurvalue}`)
    //1 and the curr is 2
    //3 and the curr is 3
    return accumulator+cuurvalue
})
console.log(myTotal) //6

//doing same with the arrow functions
const newTotal= myname.reduce((acc,curr)=> acc+curr)
console.log(newTotal)  //6
