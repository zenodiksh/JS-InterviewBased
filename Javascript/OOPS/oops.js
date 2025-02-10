//object literal
const user={
    username:"hitesh",
    loginCount:8,
    isLoggedIn:true,
    getuserDetail:function(){
        console.log(`random things`)
    }
}
console.log(user.username)
console.log(this)// empty object

//constructor function
// const promiseOne=new Promise()
// const newDate=new Date()
 //use of new is basically to create a constructor fucntion

 function yuser(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    
    this.isLoggedIn=isLoggedIn

    return this
 }

 const userone=yuser("hitesh",12,true)
 //console.log(userone)
 
 const usertwo=  yuser("chanis",123,false)
 //console.log(usertwo)

 //console.log(userone)

 //value overwrite ho gai h isliye hi hum new keyword use krte h 
 //for creating an instance evry time 
 const userthree=new yuser("hitesh",12,true)
 const userfour=  new yuser("chanis",123,false)
 console.log(userthree);
 console.log(userfour);
 
 //always use a new keyword while craeting an object literal and for passing a function
 //in an instance 
 