//what is staic
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`the new username is ${this.username}`)
    }

    static createId(){
        return `123`
    }
}
const chai=new User("hitesh")
console.log(chai)
//console.log(chai.createId())->error
//yha pr we have given access to my user chai 
//but what if i dont wan to give its access nd 
//need to be privately available to me 
//we will use static createId(){
// return `123`}

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone);
//console.log(iphone.createId()); ->error