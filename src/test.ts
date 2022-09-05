let number = 3;
number = 0.3;
let age = 30;
let arr: Array<number|string|boolean> = [];

let arr2: (string|number)[] = [];

arr.push(true)

arr2 = ['', 'basic']

let ninja: {name: string};

let arr3: Array<any> = [];

arr3.push(40);
arr3.push('Frank')
arr3.push(false);

console.log(arr3);

arr2.push(40);

console.log(arr2);

let mixed: {age: number} = {age: 12};

mixed.age = 22;

console.log(mixed);

const greet = () => {
  console.log('hello');
}

let greet2: Function;

greet2 = () => {
  alert('hello world!');
}

const sumOfNumbers = (a: number, b: number, c: number | string = 'hi!', d?: number) => {
  console.log(a + b);
}

const subtractNubers = (a: number, b: number):number => {
  console.log(a - b);
  return a - b;
}

sumOfNumbers(2, 10)

type isNumber = number
type obj = {name: string, age: isNumber} // Aliases for avoiding repitition

const many = (user: obj) => {
  console.log(`${user.name}'s age is ${user.age}`)
}

many({name: 'Gerald', age: 30})

// Function Signatures

let signature: (param1: string, param2: string) => void 

signature = (name, slang) => {
  console.log(`${name} says ${slang} a lot`)
}

let calculator: (param1: number, param2: number, c: string) => number

calculator = (a, b, c) => c === 'add' ? a + b : a - b;


// function signature with types (example 1)
let tester: (params: {name: string, age: number, id: number | string}) => void;

tester = ({name, age, id}) => {
  console.log(`employee ${id} is ${name} and his age is ${age}`)
}

// function signature with types (example 2)
type objParams = {name: string, age: number, id: number | string}

let tester2: (params: objParams) => void;

tester2 = ({name, age, id}) => {
  console.log(`employee ${id} is ${name} and his age is ${age}`)
}

// Classes (Old Method)

class Sample {
  readonly client: string
  private details: string
  public amount: number

  constructor(client: string, details: string, amount: number) {
    this.client = client;
    this.details = details;
    this.amount = amount;

  }

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

let sample1 = new Sample('Richard', 'built Richard\s website', 300)
let sample2 = new Sample('BabaTomiwa', 'built BabaTomiwa\s website', 400)

let samples: Array<Sample> = [];

samples.push(sample1, sample2);

samples.push(sample1, sample2);

samples.forEach(sample => console.log(sample.format()));

// New Way

class Voucher {
  constructor(
    readonly client: string, 
    private details: string, 
    public amount: number) {}

  format(): string {
    return `${this.client} owes $${this.amount} for ${this.details}`
  }
}

// Interfaces

interface isPerson {
  name: string;
  age: number;
  speak(param: string): void;
  earn(param: number): number;
}

const me: isPerson = {
  name: 'Gambit',
  age: 33,
  speak(param) {
    console.log(`I speak ${param}`)
  },
  earn(dollars) {
    console.log(`I earn $${dollars} in Phenopolis`)
    return dollars;
  }
}

const greetPerson = (person: isPerson) => {
  console.log(`Hello ${person.name}`)
}

greetPerson(me)


// Generics
const addUID = <T extends object>(object: T) => {
  let uid = Math.floor(Math.random() * 1000)
  return {...object, uid: uid}
}

let docOne = addUID({name: 'Francis', age: 33})

console.log(docOne)

// Enums
enum RESOURCETYPE {BOOK, PERSON, CLUBS }

// Generics with interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  resourceType: RESOURCETYPE;
  data: T
}

const docThree: Resource<object> = {
  uid: 300,
  resourceName: 'person',
  resourceType: RESOURCETYPE.PERSON,
  data: {game: 'nintendo'}
}

const docFour: Resource<string[]> = {
  uid: 300,
  resourceName: 'clubs',
  resourceType: RESOURCETYPE.CLUBS,
  data: ['Chelsea', 'Liverpool', 'Bayern']
}

// Tuples

const tup: [string, number, {name: string, age: number}, boolean] = ['Chelsea', 1905, {
  name: 'Chelsea Fc', age: 117
}, true]