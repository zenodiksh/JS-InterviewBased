class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`this is the new ${this.username}`)
    }
}//parent class

class Teacher extends User{
    constructor(username,email,password){
        super(username) //must be used firstly before emaul and passwords coz 
        //super keyword is special

        this.email=email;
        this.password=password;
        //how do i get username from User parent class
        
       

    }
    addCourse(){
        console.log(`A new course was added to the ${this.username}`)
    }
}
const chai=new Teacher("chai","chai@teacher.com","123")
console.log(chai.addCourse())
const masalachai=new User("masala chai")
console.log(masalachai.logMe())

console.log(chai instanceof Teacher)
console.log(chai instanceof User)
console.log(chai === Teacher)
