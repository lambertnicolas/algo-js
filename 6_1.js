class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let catOne = new Cat("Skitty", "9");
let catTwo = new Cat("Pixel", "6");

console.log(`${catOne.name} a ${catOne.age} ans et ${catTwo.name} a ${catTwo.age} ans`)