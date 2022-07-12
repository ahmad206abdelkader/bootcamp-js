const colors =[
    'red',
    'orange',
    'blue',
    'green',
    'yellow',
    'brown',
    'purple',
    'selver'
     
];
  
const changeColor = function(box){
    const h1 = document.querySelector('h1');
    h1.style.color = this.style.backgroundColor;



    // console.log(this)
    // console.log(box.style.backgroundColor);
}
const container = document.querySelector('#boxes');

for(let color of colors){
    const box = document.createElement('div');
 
    box.style.backgroundColor =color;
    box.classList.add('box');
    container.appendChild(box);
    box.addEventListener('click', changeColor)
}