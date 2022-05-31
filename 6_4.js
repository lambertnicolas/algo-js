//Create a class named Person. 
//It will have two properties, 
//firstname and lastname, 
//as well as a getter name, 
//which will return "[firstname] [lastname]", 
//and a setter name, 
//which will divide the full name on the basis of a space: the first element will be the firstname, the second the lastname.

//Test the class: Create an instance of the Person class and display the value of the name inside the console, 
//then assigns a new value to it and displays the state of the instance inside the console at the end of the process.

class Person {
    constructor (firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get getName() {
        return `${firstName} ${lastName}`;
    }

    set setName(fullName){
        this.firstName = fullName.split(" ")[0];
		this.lastName = fullName.split(" ")[1];
    }
}


let user = new Person("prénom","nom");
console.log(user);

user.fullName = "Nicolas Lambert";
console.log(user.fullName);