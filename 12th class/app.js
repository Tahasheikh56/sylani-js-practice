// old function (normal function) 
// function add (x, y){
//     return x + y;
// }
// console.log(add(3, 3));

// // new function (arrow function) 
// const sub = (X, Y) => {
//     return X - Y;
// }
// console.log(sub(3, 3));

// // single 1 line ka kaam h to {} lagana zaroori nh h or rturn likhne ki bhi default return hoga
// const mul = (x, y) => x * y;
// console.log(mul(3, 3));

// // agar 1 parameter h to parameter ka braket lagana zaroori nh
// const round = num => Math.round(num);
// console.log(round(3.903));

// simple object k andar function banake us us function ko call
// const obj = {
//     name:"Taha",
//     print:function(){
//       console.log(obj.name);
//     }
// }
// obj.print();

// / object k andar function ke call karne se print hojaye ga magar object k andar function or us me set time out chalane se function call nh hoga
// settimeout is liye print nh hota kio k simple object k andar function banake k call kare ge wo function print hoga kio k wo object k andar h is liye us ko
// data mil jaye ga magar jo object k function k andar settimeout lage ga to usko sirf us function ka data mile ga wo jis function ka andar h us ko object ka data nh milega
// const obj = {
//     name:"Taha",
//     print:function(){
//        setTimeout(function(){
//         console.log(obj.name);
//        }, 1000)
//     }
// }
// obj.print();

// obj k andar function or us function k andar settime out kese call haga arrow function se kio k ye function k andar setiomeout ko object se connect kar data h is liye usko data mil jaata h
// const obj = {
//     name:"Taha",
//     print:function(){
//        setTimeout(() => {
//         console.log(obj.name);
//        }, 1000)
//     }
// }
// obj.print();

// default parameter 
// agar parameter ki value dana bhool jaye to ye value call ho jaye
// function add (x = 5, y = 6){
//     return x + y;
// }
// console.log(add());

// rest parameter
// agar user ziyada vlaue de raha 2 parameter k ilwaw to baqi value rest parameter me store ho jaye array ki shakal me jitne value ho
// ya agr ap ko pata na ho ap ka functio kitna parametr le ga to rest parametr use hoga
// function add (x, y, ...z){
//     console.log(x, y, z);
// }
// add(4, 5, 6,6,6);

// old version
// const firstName = "taha";

// const obj = {
//     firstName:firstName,
// };

// console.log(obj);

// new version agar ap apne variable k name se key or value dono banaana chahte h to dono likhne ki zaroorat nh
// short syntax for objects
// bahar variable banake object k andar call karana 
// const firstName = "taha";
// const lastName = "sheikh";
// const obj = {
//     firstName,
//     lastName,
// // old js version me ase method banate the
//     // print:function(){
//     //     console.log(this.firstName, this.lastName);
//     // }

// // new js version me ase
// print () {
//     console.log("Taha sheikh");
// }
// };

// obj.print();

// obj ke andar se  key or value bahar call karana
// const obj = {
//     firstName:"taha",
//     lastName:"kahan",
//     print:function(){
//     console.log("taha");
//         }
//     };

// // variable banake ase bhi obj ka andr ka bahar call kara sakte h
// //  const user = obj.firstName;
// //variable banake  ke phir obj k anadr ke key ko {} me likh kar
//  const {firstName} = obj;
// console.log(firstName);   

// arrrau k sath k array ka andar ki vakue ko bahar variable me store kar ke print karwana
// const arr = ["taha", "khan"];
// const[first] = arr;
// console.log(first);

// spread operators arrray ki copy banane k liye
// const arr = ["taha", "khan"];
// const newArr = ["hy", ...arr, "by"];
// console.log(newArr);


// object me spread oprator object copy karne k liye 
// const obj = {
//     first:"taha",
//     last:"khan",
// };
// const newObj = {...obj, hobby["video"]};
// console.log(newObj);

// obj ke anadr ka kuch change karne k liye
// const obj = {
//     first:"taha",
//     last:"khan",
// };
// const newObj = {...obj, hobby:"video", first:"sheikh"};
// console.log(newObj);

// oops 
// classes

// pehli ase object banate the js ki old version me magar is me agar ap key bhool gayae 2 object ki agar alag key rakh de to 1 chalae ga 
// const obj = {
//     name: "led tv",
//     price:12000,
// };

// const obj2 = {
//     title:"galaxy",
//     amaount:14000,
// };
// const product = [obj, obj2];
// product.forEach(p => console.log(p.name));


// is liye hum classes istemall karte h
class products {
    constructor(title, price){
        this.title=title;
        this.price=price;
    }
};
const product1 = new products("led tv",12000);
const product2 = new products("sumsung",14000);
const product = [product1, product2];
product.forEach(p => console.log(p.title));
