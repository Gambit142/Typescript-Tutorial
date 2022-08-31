import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
let docOne;
let docTwo;
docOne = new Invoice('Francis', 'web creation', 1350);
docTwo = new Payment('Nzenwa', 'consultancy', 1200);
let docsArr = [];
docsArr.push(docOne, docTwo);
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
