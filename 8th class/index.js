// sonst se bghi variable banta h let me variable me changes karsakte const me nh
// jo function hum bahar banate h wo function hota h or jo object k andar wo method hota h
// variable banane k  baad new lagane ka matlb class banana h matlb 1 naya object

// // simple class
// const date = new Date();
// console.log(date);

// simple class with methods

// default pc date / time de ga jo pc me hoga variable ka name .get lagake
// const date = new Date();
// console.log(date.getDate());  date bataye ga jo pc me set hogi
// console.log(date.getMonth()); month bataye ga magar array ka hisaab se  matlb junuary h to 0 bataye ga

// is liye hum is ko ase call karate h take month ka name bataye
// let month = ["junuary","februry","march","april"];
// console.log(month[date.getMonth()]);

// console.log(date.getFullYear());  year bataye ga jo pc me set hogi
// console.log(date.getHours()); hours bataye ga jo pc me set hogi
// console.log(date.getMinutes()); minutes bataye ga jo pc me set hogi
// console.log(date.getSeconds()); seconds bataye ga jo pc me set hogi
// console.log(date.getMilliseconds()); milliseconds bataye ga jo pc me set hogi

// custom date dena  variable ka name .set lagake
// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);
// console.log(doomsDay);

//aj se  doomsday me kitna year,month,day,hours,minute,second baqeh
// const doomsDay = new Date();
// const date = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2035);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// // ajse doomsday me kitna time h uskemliye
// let diff = doomsDay.getTime() - date.getTime()
// // dot fixed is liye k bade decimal vlue ki jage value k bad . me sirf 1 num de
// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1));

// // digital clock using time
// let hours = document.getElementById("hours");
// let mins = document.getElementById("minutes");
// let sec = document.getElementById("seconds");

// setInterval (function (){
//     const date = new Date();
//     hours.innerText = date.getHours(); 
//     mins.innerText = date.getMinutes(); 
//     sec.innerText = date.getSeconds(); 
// },1000);

// digital clock using time with 12 hours format and am/pm
let hoursEle = document.getElementById("hours");
let minsEle = document.getElementById("minutes");
let secEle = document.getElementById("seconds");
let ampmEle = document.getElementById("ampm");

setInterval (function (){
    const date = new Date();
    let hours = date.getHours();
    let ampm = "AM";

if(hours > 11){
ampm = "PM";
if(hours > 12){
hours -=12 ;
}
}

    hoursEle.innerText = hours; 
    minsEle.innerText = date.getMinutes(); 
    secEle.innerText = date.getSeconds(); 
    ampmEle.innerText = ampm;
},1000);