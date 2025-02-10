"use strict";
const course =
{
    coursename:"chai aur code",
    price:"999",
    courseInstructor:"hiteshchaudhary",
    company:"chai aur code"
}
//destructing a object in js

const {courseInstructor}= course
      //key           //obj name
const{courseInstructor:instructor}=course//yha pr naam chota kr diya hai from
//course instructor to instructor
console.log(instructor)
console.log(courseInstructor)//both will give the same output

//example-upar vala react mein kaam aata h
const navbar=({company})=>{

}
navbar(company={hitesh})
//api se hme json format mein value milti h kis form mein json(java script obj. notation)
//json mein key and value dono hi strings hoti h 
const newjsonfromapis={
    "name":"hitseh",
    "cousename":"chaichai"
}

//api can easily be fetched ,formatted,
//by javascript object  nottion furhter

