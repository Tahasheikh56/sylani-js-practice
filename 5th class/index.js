// simple array
// let months = ["january" , "febrary" ,"March"];

// months [3] = "may"; is se hum add kar sakte he index num pata karke agar humne array me 3 value di h 4 bhi dena
// h to aise array ka name index num = de kar value de sakte h magar yaad rahe k array ki value 0 se start hoti h
// is liye agar 4 value deni h to uska index num 3 hooga magar ye not recommended h 

// console.log(months);

// array using with prompt & condition
// let months = ["january" , "febrary" ,"March"];
// let store = prompt("array me value rakhna h");
// if (store === "yes"){
//     months.push("May");
// }
// console.log(months);

// array using with default js methad
// let months = ["january" , "febrary","sept" ,"March" ,"april"];

// months[3] = "may"; array ka index number likh kar koi value add kar skate h purane value change karsakte h
// months.shift(); remove 1st index value
// months.unshift("jan"); add value on ist index
// months.pop(); remove last index value 
// months.push(3); add value on last index
// console.log(months.length); array ki length batata ha kitni value h kitni quaintity h

// months.splice(2); is se ap marzi ki value kat sakte ho magar is ap agar 2 likh value kat te ho to wo 2 ke baad 
// se sare value kat de ga is liye hume batana parta h k index no 2 ki sirf 1 value kat ni h us ko ase likhte h 

// months.splice(2,1); is ke ilawa agar ap koi value replace karna chahate ho to ye likho ge months.splice(2, 1 "june");
// let newArr = months.slice(0,2); is se hum purane array se new array bana sakte h matlb pehle array se 2 value nikal kar new array 
// bana sakte h ()k andar index no likh kar ke kis num se or kitni value chahiye
// is humkihe ge new aaaray ka new variable banaye ge jese et newArr = months.slice(0,2); o ke badd value bataye ge kitne chahaye
// console.log(newArr); se print kar waye ge

// console.log(months);

// advanced level array using method & function

// call back function using foreach(loops through array values) 

// let arr = ["apple", "mango", "orange"];
// arr.forEach(function(value, index){
// console.log( index, value);
// });

// array.filter matla channa use karte h agar bohot number h to use se even number nikalne k liye

// let arr = [1,2,3,4,5]; long coding
// let newArr = arr.filter(function(value){

// if(value % 2 === 0){
//     return true;
// }
// else{
//     return false;    
// }
// });
// console.log(newArr, arr);

// let arr = [1,2,3,4,5]; short code
// let newArr = arr.filter(function(value){
//     return value % 2 === 0;
// });
// console.log(newArr);

// arr.sort kisi bhi cheez ko chote se bada ya bada se chota karna jese 1 se 10 ya 10 se 1
// let arr = [1,9,4,8,5,6,3,2,10,7];
// let newArr = arr.sort(function(a, b){
// if(a > b){
//     return 1;
// }
// else {
//     return -1;
// }
// });
// console.log(newArr);

// reduce with number mtlb + karna concatinate karna
// let arr = [1,9,4,8,5,6,3,2,10,7];
// let total = arr.reduce(function(prevValues, nextValues){
// return prevValues + nextValues;
// },0);
// console.log(total);

// reduce with number mtlb + karna concatinate karna
// let arr = ["Happy", "Birthday", "Taha"];
// let total = arr.reduce(function(prevValues, nextValues){
// return prevValues  +  ""  +  nextValues;
// },"");
// console.log(total);

// concatination with foreach
// let arr = ["Happy", "Birthday", "Taha"];
// let total = "";
// arr.forEach(function(val){
//     total = total + "" + val;
// });

// console.log(total);

