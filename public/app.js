"use strict";
const anchor = document.querySelector('a');
console.log(anchor.href);
const form = document.querySelector('.new-item-form');
const form2 = document.querySelector('.new-item-form');
const amount = document.querySelector('#amount');
console.log(form.children);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(amount.valueAsNumber);
});
