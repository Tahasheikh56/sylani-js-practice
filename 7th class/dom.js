//  DOM (document object model)
// dom ka istimaal is liye hota h jab js ki file browser me chlate h to  browser html read nh karta  to dom html ko object me convert karta h

// dom me html connect or html likhna
// let work = document.getElementById("my-para");
// work.innerHTML="<b>Hello</b>";

// dom me css or html ka istemaal (1st animation)
// let work = document.getElementById("my-para");
// work.innerHTML="<h1>Hello Taha</h1>";
// work.style.background ="black";
// work.style.color = "white";

// dom me kisi kaam ko repeat karana loop/array se jaldi chalta h is lye setinterval or function istemaal take slow repeat ho animatiion ki tarah
// 1 animation banane k liye
// setInterval(function(){
// if(work.style.display === "none"){
//     work.style.display = "block";
// }
// else{
//     work.style.display = "none";
// }
// },500);

// // dom me css or html ka istemaal (2nd animation)
// let work = document.getElementById("my-para");
// work.innerHTML="<h1>Hello Taha</h1>";
// work.style.background ="black";
// work.style.color = "white";
// work.style.width = "100%"

// 2nd animation
// setInterval(function(){
//     let width = work.style.width
//    if( width === "100%"){
//     work.style.width = "10%";
//    }
//    else{
//    width = +width.replace("%", "");
//     work.style.width = width + 10 + "%";
//    }
//     },500);

// dom me css or html ka istemaal (3rd animation)
let work = document.getElementById("my-para");
work.innerHTML="<h1>Hello Taha</h1>";

// 3rd animation
setInterval(function(){
 let color1 = Math.floor(Math.random() * 16777215).toString(16) ;                  
 let color2 = Math.floor(Math.random() * 16777215).toString(16) ;                  
work.style.backgroundColor = "#" + color1;
work.style.color = "#" + color2;

// color code dekhne k liye
console.log(color1 , color2);
    },500);