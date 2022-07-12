const form = document.querySelector('#signup-form');

const creditCard = document.querySelector('#cc');
const termCheckbox = document.querySelector('#term');
const veggieSelector = document.querySelector('#veggie');

form.addEventListener('submit',function(e){
    alert("SUBMETTED THE FORM!!")
    console.log('cc',creditCard.value);
    console.log('term',termCheckbox.value);
    console.log('veggie',veggieSelector.value);
    e.preventDefault();
});