//promises are basically the eventual completion (or failure) of any asynchronous operation 
// and its returning value.

//A promise is found in 3 states:-
//fullfiled,rejected,pending

//we create less promise in javascript rther we consume the promises

//earlier there were libraries used for bluebird and qin libry was there 
//but now we do not use any library in node.js


/*
const PromiseOne= new Promise(
 function(resolve,reject){
    //do any asynchrnous task.
    setTimeout(function(){
        console.log(`the task is random`);

    },2000)
    resolve()
})

//how to consume this promise (.then)
PromiseOne.then(function(){
    console.log(`promise consumed`)
})
*/
//2nd way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log(`async task 2nd one `)
        //this is resolves at any place inside the promise
    },1000)
    resolve()
}).then(function(){
    console.log(`2nd task consumed`)
})

//3rd way
const promisethree =new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",
            email:"chai@gooogle.in"
        })

    },2000)
})

promisethree.then(function(user){
    console.log(user)
})

//4th way
const promisefour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error= true
        if(!error){
            resolve({username:"hitesh",
                password:"12345"
                
            })
        }
        else{
            reject("ERROR:SOMETHING WENT WRONG")

        }
    },1000)

})

//promisefour.then().catch()
//above is the syntax for resolve use .then()
//for reject use .catch()

promisefour.then((user)=>{
    console.log(user);
    return user.username
    //where to return user is done by chaining
}).then((username)=>{
    console.log(username)
}).catch(function(err){
    console.log(err)
})
//aise bhut sari situations aati h jaha pr u use 
//.finally(()=>{
   // `the promise is either resolved or rejected`})
//5th way

//5th way is very special coz it uses async keywords

const promisefive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"javascript",
                password:"123"
                
            })
        }
        else{
            reject("ERROR:")

        }
    },1000)

})

async function consumepromisefive(){
    try{
        const response=await promisefive
    console.log(response)
    }
    catch(err){
        console.log(err)
    }
}
consumepromisefive()
