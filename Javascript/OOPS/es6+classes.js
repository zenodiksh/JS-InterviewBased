class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    }
    encryptPassword(){
        return `${this.password}abcdef`
    }
    changeusername(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new User("chai","chai@google.com","1234")
//console.log(chai)
console.log(chai.encryptPassword())
console.log(chai.changeusername())
//above is same code like callnthis.js but here 
//classes,staticc,constructor is used

//whats happemning behind the scenes
function users(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password;

    
}
users.prototype.encryptPasswords=function(){
     return `${this.password}abcdef`

}
users.prototype.changeusernames=function(){
    return `${this.username.toUpperCase()}`

}
const tea=new users("chai","chai@google.com","1234")
//console.log(chai)
console.log(tea.encryptPasswords())
console.log(tea.changeusernames())


//both pice of code do the same things

