const btn = document.querySelector('button');

btn.addEventListener('click',function(){
    alert('clicked!!!');
} );
btn.addEventListener('click',function(){
    comsole.log('second yjimg!!');
} );

btn.addEventListener('mouseover', function(){
    btn.innerText = 'stop touching me';
});
btn.addEventListener('mouseout', function(){
    btn.innerText = 'Click me';
});


window.addEventListener('scroll', function(){
    console.log("stop scrtoling")
})

