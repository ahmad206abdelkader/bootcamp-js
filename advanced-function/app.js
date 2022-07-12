function lol(){
    let person = 'tom';
    const age = 45;
    var color = 'teal'
    console.log(age);
}
function changeColor (){
    let color ='purple';
    const age =19;
    console.log(age);
}
lol();
changeColor();

// 45
// 19


let bird = 'dandarin duck';

function birdWatch(){
    let bird = 'golden pheasant';
    console.log(bird);

}
birdWatch();

// golden pheasant

console.log(bird);
// dandarin duck


/////////////
////////////
////////////
///////////
//////////
//////////


let animals = ['dogs' , 'cats' , 'lion'];
for (var i =0;i<animals.length ; i++){
console.log(i , animals)
};

// 0 (3) ['dogs', 'cats', 'lion']
// app.js:44 1 (3) ['dogs', 'cats', 'lion']
// app.js:44 2 (3) ['dogs', 'cats', 'lion']



function doubleArr(arr){
    const result = [];
    for(let num of arr){
        var double = num *2;
        result.push(double );

    }
    console.log(double);
    return result;
};


///////////
/////////
/////////
//////////
/////////
/////////
///////
//lexical scope

function outer(){
    let movie = 'amadeus';

    function inner(){
        console.log(movie.toUpperCase())
    }
    inner();////the function in side becumes return in out

}
outer();

// amadeus


// function TodoList(){
//     let todos = [];
//     let username = '';
//     function addTodo(){

//     }
//     function removeTodo(){

//     }
// }

////////////
//////////
//////////
/////////
////////
const product = function multi (x,y){
    return x * y ;

}

function multiply(x,y){
    return x * y;
}

const subtract = function (x,y){
    return x - y;
}
function add(x,y){
    return x + y;
}

const divid = function (x,y){
    return x /y;
}

const operation = [add, subtract, multiply, divid];


for(let func of operation){
    let result = func(30 , 5);
    console.log(result);


}

// 35
// app.js:129 25
// app.js:129 150
// app.js:129 6


//////////////
/////////////
/////////////
//////////////
//////////
////////
///////////



function callThreeTimes(f){
    f();
    f();
    f();
}

function cry() {
    console.log('BOO HO IM SO SAD! ' );
}




// callThreeTimes(cry);
// app.js:157 BOO HO IM SO SAD! 
// app.js:157 BOO HO IM SO SAD! 
// app.js:157 BOO HO IM SO SAD! 
// undefined


function repeatNTime(action,num){
    for(let i = 0;i < num; i++){
        action();
    }
}

// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 
// BOO HO IM SO SAD! 

function multiplyBy(num){
    return function (){
        console.log("HI!!");
    }
}


// const adding = multiplyBy();
// undefined
// adding()
// app.js:187 HI!!
// undefined

function numX(num){
    return function(x){
        return x * num;
    }
}

const triple = numX(3);


// triple(4)
// 12



const double = numX(2);

//double(4)
//8

const halve = numX(0.5);

// halve(4)
//2

function makeBetweenFunc(x,y){
    return function (num){
        return num >= x && num <= y;
    }
}
const isChild = makeBetweenFunc(0, 18);

// isChild(4);
// true

const inYear = makeBetweenFunc(1999,2020);

// inYear(2001)
// true



///////////////
///////
////////////
///////////
//////////////
///////
///////////
///
///
///////////////



// callback 

// function goosBaums(){
//     alert("dom dom dom");

// }
// setTimeou(goosBaums,5000);



const Btn = document.querySelector('button');

Btn.addEventListener('click', function(){
alert("WHY DID YOU CLICK ME!!!!@!@!2");


}
)