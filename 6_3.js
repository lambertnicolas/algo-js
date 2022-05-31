class Animal {
    constructor (greeting,name){
    this.name=name;
    this.constructor.greeting=greeting;
    }
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

//class Dog
class Dog extends Animal {
	constructor(greeting, name) {
		super(greeting, name);
	}
	static greeting() {
		super.sayHello();
	}
}

//class Cat
class Cat extends Animal {
	constructor(greeting, name) {
		super(greeting, name);
	}
	static greeting() {
		super.sayHello();
	}
}


let dogOne = new Dog ("Wouf","Maurice");
let catOne = new Cat ("Miaou","Félix");

console.log(dogOne.sayHello());
console.log(catOne.sayHello());