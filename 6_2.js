class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        console.log(`Hello ${this.firstName} ${this.lastName} !`);
    }   
}

let qlqun = new Person("Nicolas","Lambert");

console.log(qlqun.sayHello());