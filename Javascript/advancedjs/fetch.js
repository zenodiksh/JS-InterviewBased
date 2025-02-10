//promises are as it is used for fetching of requests
//fetch bhi promise hi toh h 
//woh toh hmne khud se promises ko create kiya tha 
//bt yha pr we will use in bulit promises aur api links ka istemaal krenge

async function getAlluser(){
    try{
       const response=await fetch(
           `https://jsonplaceholder.typicode.com/users`
       )
       const data= await response.json() //coverting to json
       console.log(data)
    }
    catch(err){
        console.log(err)
    }
}
getAlluser()


//another syntax
fetch(`https://jsonplaceholder.typicode.com/users`)
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((err)=>{
    console.log(err)
})