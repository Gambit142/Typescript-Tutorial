import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const ul = document.querySelector('ul')!
const listTemplate = new ListTemplate(ul)

let docOne: HasFormatter
let docTwo: HasFormatter

docOne = new Invoice('Francis', 'web creation', 1350)
docTwo = new Payment('Nzenwa', 'consultancy', 1200)

let docsArr: HasFormatter[] = []

docsArr.push(docOne, docTwo)

const anchor = document.querySelector('a')!;

console.log(anchor.href)

const form = document.querySelector('.new-item-form') as HTMLFormElement
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

form.addEventListener('submit', (e) => {
  e.preventDefault()
  let doc: HasFormatter
  if(type.value === 'invoice') {
    doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
  } else {
    doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
  }

  listTemplate.render(doc, type.value, 'start')
})

