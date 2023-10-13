class User {};
// Instancia
// const newUser = new User();

class Customer {
    greeting() {
        return 'Hello';
    }
};

const gndx = new Customer();
console.log(gndx.greeting())
const developer = new Customer();
console.log(developer.greeting());

// Constructor

class Customer {
    constructor() {
        console.log('New Customer');
    }
    greeting() {
        return 'Hello';
    }
}

const david = new Customer();

// this

class User {
    constructor(name) {
        this.name = name;
    }
    //methods
    speak() {
        return 'I can speak';
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const ana = new User('Ana');
console.log(ana.greeting())

// setters getters

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //metodos
    speak() {
        return 'Hello'
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const developer1 = new User('David', 15);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);
