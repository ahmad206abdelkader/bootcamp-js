const input = document.querySelector('#username');

input.addEventListener('keydown',function(e){
console.log('key down');
});
input.addEventListener('keyup',function(e){
    console.log('key up!!');
    });

    input.addEventListener('keypress',function(e){
        console.log('key PRESS!');
        })