import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
const ul = document.querySelector('ul');
const listTemplate = new ListTemplate(ul);
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
    const values = [toFrom.value, details.value, amount.valueAsNumber];
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    listTemplate.render(doc, type.value, 'start');
});
