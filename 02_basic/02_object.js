 // const tinderUser = new Object {};

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Harry";
tinderUser.age = 22;
tinderUser.email = "some@gmail.com";

// console.log(tinderUser); 

// console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'age', 'email' ]
// console.log(Object.values(tinderUser)); // [ '123abc', 'Harry', 22, '



const regularUser = {
    email:"some12@gmail.com",
    fullname:{
        userFullname: {
            firstName: "John",
            lastName: "Doe"
        }
    }
}
 // console.log(regularUser.fullname); // { userFullname: { firstName: 'John', lastName: 'Doe' } }

// console.log(regularUser.fullname.userFullname.firstName);   // John

const obj1 = {1:"a", 2:"b", 3:"c"};
const obj2 = {4:"a", 5:"b", 6:"c"};

// const obj3 = {obj1} ; // console.log(obj3); // { obj1: { '1': 'a', '2': 'b', '3': 'c' } }
// console.log(obj3);

const obj3 = {...obj1, ...obj2} ; //
 // console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'a', '5': 'b', '6': 'c' }


 const course ={
    courseName: "JavaScript",
    courseDuration: "3 months",
    coursePrice: 1000,
    courseTopics: ["JS Basics", "JS Advanced", "JS DOM"],
    courseInstructor: "harish"
 }

 // console.log(course["courseInstructor"]);
 
    const {courseInstructor : instructor} = course;  // object destructued  console.log(instructor); // harish
         console.log(instructor); // harish