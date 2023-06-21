//  oop (object oriented programming)
// method or function me fark jo function object k bahar ho wo function or jo object k bracket k andar ho wo method

// normal oop 
// let person = {
//     name: "Taha",
//     cnic: 1234567890,
//     eyeColor: "Brown",
//     speakEnglish: false,
// };

// console.log(person.name); 

// oop with function
// let person = { person = object
//     name: "Taha Khan", name: "taha" = property
//     cnic: 1234567890, cnic = key
//     eyeColor: "Brown", brown = value
//     speakEnglish: false,
//     speak: function (sent){ speak = key & function = method
//         console.log(sent + this.cnic);
//     }
// };

// person.speak("Hello ");
// console.log(person.name); 


// include students data using array (hum is me array k zariye kamm kar re h)
// student data start
// let student1 = {
//     name: "Hamza",
//     rollno: 420,
//     className: "Javascript",
// };

// let student2 = {
//     name: "farrukh",
//     rollno: 421,
//     className: "css",
// };
// // student data end

// // array start
// let students = [student1, student2];
// // print array
// console.log(students);

// // include student data using array & function (hum is me array k zariye kamm kar re h)
// // function start
// function provStd(name1, roll1 ,clas1){
//     return{
//                 name: name1,
//                 rollno: roll1,
//                 className: clas1,
//     };
// }
// // array start
// let students = [
//  provStd("Taha", 1, "js"),
//  provStd("khan", 2, "meta")
// ];

// // print array
// console.log(students);

// // include student data using promp,array & function (hum is me array k zariye kamm kar re h)
// // function start
// function provStd(){
//     return{
//                 name: prompt("Enter Your Name :"),
//                 rollno: prompt("Enter Your Roll N0 :"),
//                 className: prompt("Enter Your Class Name :"),
//                 subject: prompt("Enter Your Subject Name :"),
//     };
// }
// // array start
// let students = [provStd()];

// // print array
// console.log(students);

// // include student data using html butuuon,prompt,array & function with variable (hum is me array k zariye kamm kar re h)
// // function start
// function provStd(){
//     let std = {
//                 name: prompt("Enter Your Name :"),
//                 rollno: prompt("Enter Your Roll N0 :"),
//                 className: prompt("Enter Your Class Name :"),
//                 subject: prompt("Enter Your Subject Name :"),
//     };
//     students.push(std);
//     // print array or show karane k liye k array me kitna index h
// console.log(students);
// }
// // array start
// let students = [];

// local storage me data save karane ka k jab tak browsing clear na kare kab tak data save rahe
// localStorage.setItem("name", "taha"); name=> key taha=>value
// ye data local storage me save hoga console me jake localStorage.getItem(); or key ka name likhne se ajayega

// include student data using html butuuon,prompt,array & function with variable (hum is me array k zariye kamm kar re h)
// local storage me data save karane ka k jab tak browsing clear na kare kab tak data save rahe
// local storage me data string ki form me save hota h object me nh is liye hum object ko json me convert karke save karte h
// function start
// function provStd(){
//     let std = {
//                 name: prompt("Enter Your Name :"),
//                 rollno: prompt("Enter Your Roll N0 :"),
//                 className: prompt("Enter Your Class Name :"),
//                 subject: prompt("Enter Your Subject Name :"),
//     };
//     students.push(std);
//     // print array or show karane k liye k array me kitna index h
// console.log(students);
// // string ko json me convert karne ka
// let stringfiy = JSON.stringify(students);
// // local storage me save karne ka
// localStorage.setItem("students",stringfiy);
// }
// // array start
// let students = [];


// console me students ko dekhne se array kahli bata ra h data hone k bawajood usko thk ka
function provStd(){
    let std = {
                name: prompt("Enter Your Name :"),
                rollno: +prompt("Enter Your Roll N0 :"),
                className: prompt("Enter Your Class Name :"),
                subject: prompt("Enter Your Subject Name :"),
    };
    students.push(std);
    // print array or show karane k liye k array me kitna index h
console.log(students);
// string ko json me convert karne ka
let stringfiy = JSON.stringify(students);
// local storage me save karne ka
localStorage.setItem("students",stringfiy);
}
// array me show karne ka liye variable banana pare ga
let previous = localStorage.getItem("students");
// array start & convert json to string kiyo k array me string show hoga json nh
// ? ka mtlb agar aesa h to ye show ho jaye nh to khali []
let students = previous ?  JSON.parse(previous) : [];
