// simple function using parameter & argument 
//jo function ke baaad wale () me likhte h wo parameter hota h or jo function call karwate howe () k ander likhte h wo
// jo parameter humne pass kiya h uska argument hota h
// function greet()is me parameter pass hota h , or greet() is me argument
// ye custom function isko humne banaya h or alert.math.round ye js k built in define fuction h

//  function greet(name)  { 
//     console.log("Hello " + name);
// }
// greet("Taha"); 
// greet("Talha");
// greet("Tahir");
// greet("sahir");

// funtion with return , return ka matlb data print nh ho wapis mere pass ajaye or jab me chaho to variable bana kar print karwado
// kio k jab ap return karte ho to us pe jo ap kaam karwate ho wo kaam ho jata h magar print nh hota print karwane k liye
// variable banake call karwana hota h

// function employee (fileNo){
//     return ("working on file no : " + fileNo)
// }
// let data = employee(7);
// console.log(data);

// recursion
// function write(data , name ,time){
//     document.write("Hello " + data + name);

//     if(time > 0){
//     write(data , name ,time - 1);
//     }
// }
// write("Taha" , " Sheikh" , 10);

// factorial logic using recursion
// function factorial (num){
//     if (num >  1){
//         return num * factorial (num - 1);
//     }
//     return 1;
// }
// console.log(factorial(5));

// clousers => scopes 1)global / parent scope jis ko pure file ke ander kahi bhi istemaal kar sakte h kio k wo function k
// bahar banta h function k andar nh is liye kisi bhi functiion me call kara sakte h
// 2)local / child scope ka matlb function ke andar variable banana jis ka matlb wo sirf usi function k andar call ho sakta h bahar nh

// global scope jis me variable bana to bahar magar function k andar bhi call kara sakte h or file me kahi bhi
// let abc = 7;
// function print(){
// console.log(abc);
// }
// print();

// local scope ka matlab function k andar bana variable function k andar hi call hoga bahar nh
// function print(){
// let abc = 8 ;
// console.log(abc);
// }
// print();

//  local scope function with variable
// function print(){
//     let abc = 8 ;
//     console.log(abc);
//     return function (){ 
// console.log(abc);
//     }
//     }
// let innerfunc = print();
// innerfunc();

// local scope function with parameter
// function power(abc){
//     return function(cde){
//         console.log(abc + cde);
//     }
// }
// let inner = power(1);
// let inner2 = power(1);
// inner(4);
// inner2(4);

// local scope function with fetch
function saveUrl(url){
    return function (){
        fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
    }
}
let request = saveUrl("https://.typicode.com/todos/1")
request();