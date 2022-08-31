"use strict";
let number = 3;
number = 0.3;
let age = 30;
let arr = [];
let arr2 = [];
arr.push(true);
arr2 = ['', 'basic'];
let ninja;
let arr3 = [];
arr3.push(40);
arr3.push('Frank');
arr3.push(false);
console.log(arr3);
arr2.push(40);
console.log(arr2);
let mixed = { age: 12 };
mixed.age = 22;
console.log(mixed);
const greet = () => {
    console.log('hello');
};
let greet2;
greet2 = () => {
    alert('hello world!');
};
const sumOfNumbers = (a, b, c = 'hi!', d) => {
    console.log(a + b);
};
const subtractNubers = (a, b) => {
    console.log(a - b);
    return a - b;
};
sumOfNumbers(2, 10);
const many = (user) => {
    console.log(`${user.name}'s age is ${user.age}`);
};
many({ name: 'Gerald', age: 30 });
// Function Signatures
let signature;
signature = (name, slang) => {
    console.log(`${name} says ${slang} a lot`);
};
let calculator;
calculator = (a, b, c) => c === 'add' ? a + b : a - b;
// function signature with types (example 1)
let tester;
tester = ({ name, age, id }) => {
    console.log(`employee ${id} is ${name} and his age is ${age}`);
};
let tester2;
tester2 = ({ name, age, id }) => {
    console.log(`employee ${id} is ${name} and his age is ${age}`);
};
// Classes (Old Method)
class Sample {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
let sample1 = new Sample('Richard', 'built Richard\s website', 300);
let sample2 = new Sample('BabaTomiwa', 'built BabaTomiwa\s website', 400);
let samples = [];
samples.push(sample1, sample2);
samples.push(sample1, sample2);
samples.forEach(sample => console.log(sample.format()));
// New Way
class Voucher {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const me = {
    name: 'Gambit',
    age: 33,
    speak(param) {
        console.log(`I speak ${param}`);
    },
    earn(dollars) {
        console.log(`I earn $${dollars} in Phenopolis`);
        return dollars;
    }
};
const greetPerson = (person) => {
    console.log(`Hello ${person.name}`);
};
greetPerson(me);
