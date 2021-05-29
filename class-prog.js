//this is the way by which we can declare the class in javascript

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    // Method
    calcArea() {
        return this.height * this.width;
    }
}

//here we create the instance of class by which we can create a object which is initialized by class name
const square = new Rectangle(10, 10);

console.log(square.area); // 100

//here we can simply declare the class in the form of function
function emp(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}
e = new emp(103, "Vimal Jaiswal", 30000);

console.log(e.id);
console.log(e.name);

let animal1 = Object.create(emp);
console.log(animal1.id);