// normal class for making object
// class Product {
//     constructor(title, amount, description){
//      this.title = title;
//      this.amount = amount;
//      this.description = description;
//     }
// }

// const product1 = new Product("LED TV", 12000, "ultra hd");
// const product2 = new Product("Android", 12000, "4k camera");
// console.log(product1, product2);

// method in class
// class Shape {
//     constructor (id, x, y) {
//         this.id = id
//         this.move(x, y)
//     }
   
//     move (x, y) {
//         this.xr = x
//         this.y = y
//     }
// }

// const square = new Shape("square", 5, 5);
// console.log(square);

// enter students data using array class method and also look for parent and child class for making object

const students = [];
// parent class
class Student{
    constructor(name, rollNo, batch, subject){
        this.name = name;
        // _ lagane ka mtlb get lagana ala se call karna
        this._rollNo = rollNo;
        this.batch = batch;
        this.subject = subject;
        this.attendence = [];
    }

    get rollNo () {
        return this._rollNo
    }

mark(){
this.attendence.push(new Date());
}
static say(){
    // static jab banate ho to usme this nh lagasakte kiok wo object se alag hota h
    console.log("say the name");
}
}
// child class
class Volunteer extends Student{
    constructor(name, rollNo, batch, subject){
        super(name, rollNo, batch, subject);
        this.canVolunteer = [];
    }

    addVolunteer(skill){
        this.canVolunteer.push(skill);
    }
    // js me kisi value ko alag se dene ke liye
    get join () {
      return  this.canVolunteer.join(" ");
    }
}
// class se object bane to usko print karane ke liye new likh variable banate h or us variable ko print karate h
// parent class
const taha = new Student("Taha", 25, 1, "C.I.T");
taha.mark();
students.push(taha);
// child class
const talha = new Volunteer("Talha", 27, 1, "C.I.T");
talha.mark();
students.push(talha);
talha.addVolunteer("HTML");
talha.addVolunteer("CSS");
// jab hum static call karate h to new variable banane ki zaroorat nh direct class ka name. lagake
// humne banaya parent me tha magar child me call karaya kio k humne dono ko extend kardiya 1 kardiya
Volunteer.say();

console.log(taha.rollNo);




