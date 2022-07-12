// FOREACT 

const numbers = [20,44,2,33,44,11,44,55,66,23];

numbers.forEach(function (num){
    console.log(num);
})


// 20
// app.js:6 44
// app.js:6 2
// app.js:6 33
// app.js:6 44
// app.js:6 11
// app.js:6 44
// app.js:6 55
// app.js:6 66
// app.js:6 23


function printTriple(n){
    console.log(n * 3);
}

numbers.forEach(printTriple);



// 60
// app.js:23 132
// app.js:23 6
// app.js:23 99
// app.js:23 132
// app.js:23 33
// app.js:23 132
// app.js:23 165
// app.js:23 198
// app.js:23 69



////////////////////
/////////////
///////////////
////////////
//////////////
////////////
/////////////




//MAP

const number = [20,21,23,26,92,20,21,24];
const word =['swap ', 'polly', 'pad', 'dity'];


const doubles = number.map(function(num){
    return num * 2;

})

// doubles
// (8) [40, 42, 46, 52, 184, 40, 42, 48]

const doubles2 = [];
for(let num of number){
    doubles2.push(num *2);
}

// doubles2
// (8) [40, 42, 46, 52, 184, 40, 42, 48]

const wordUpperCase =word.map(function(word){
   return word.toUpperCase().split('').join('.');
})

// wordUpperCase
// (4) ['S.W.A.P. ', 'P.O.L.L.Y', 'P.A.D', 'D.I.


/////////////////
/////////////
///////////
////////////
/////////////
/////////////



// arrow function 

const square = (x) => {
    return x *x;

}


// square(4)
// 16


const isEven = (num) => {
   return num % 2 == 0 ;
}

// isEven(40)
// true
// isEven(41)
// false


const great = () => {
    console.log('HI!!!!');
}

// great()
// app.js:116 HI!!!!



//////////////
/////////////
//////////////
////////////
/////////////
////////////

// function arrow with out return




const square2 = l => (
    l * l
)

// square2(3)
// 9

// const square = n => n*n;

const nums2 = [1,2,3,4,5,6,7,8];

// const doubles3 = nums2.map(function(n){
//     return n*2;
// })

// const doubles3 = nums2.map(n => {
//     return n * 2;
// })

const doubles3 = nums2.map(n => n*2);

// doubles3
// (8) [2, 4, 6, 8, 10, 12, 14, 16]



////////////
/////////
////////////
///////////
/////////
////////////



// array find

let movies =[
    "the dictator",
    "deadpool",
    "streger things",
    "la casa de papel"

]


 const movie = movies.find(movie => {
return movie.includes('dead');
}
    )

// movies
// (4) ['the dictator', 'deadpool', 'streger things', 'la casa de papel']
// movie
// 'deadpool'

// const movie2 = movies.find(m => {
// m.indexOf("dead") === 1
// }

// )



// ///////
////////////
/////////
////////////
////////////


// filter

const num3 = [35,43,24,55,33,22,36,8,9];

const odds = num3.filter(n => n % 2 == 1)


// odds
// (5) [35, 43, 55, 33, 9]



////////////
/////////
///////////
//////
/////
/////////
////////
// some and evry 

const words = ["dog","cat","daynasor","panda"];

const all3lets = word.every(word => word.length === 3)
// all3lets
// false
const Some3lets = word.some(word => word.length === 3)

// Some3lets
// true

///////
///////
///////////
////
///////
//////////

// sort 


const prices = [400.55,300.55,5000,800,400];

// prices.sort();
// (5) [300.55, 400, 400.55, 5000, 800]


// the lowwer to the largest
const sort1 =prices.sort((a,b) => a-b);
// sort1
// (5) [300.55, 400, 400.55, 800, 5000]



// the largest to the lowwer

const sort2 =prices.sort((a,b) => b-a);

// sort2
// (5) [5000, 800, 400.55, 400, 300.55]


const nums4 = [3,5,4,2,1];

const product = nums4.reduce( (total, currentValue) => {
    return total * currentValue;
})

// product
// 120

// 3*5343231


const grades  = [8,77,76,89,99,90,65,75,78];


const maxGrade = grades.reduce((max,currval) => {
    if (currval > max) return currval;
return max;

})

// maxGrade
// 99
const maxGrade1 = grades.reduce((max,currval) => {
    return Math.max(max, currval)

})

const minGrade1 = grades.reduce((min,currval) => {
    return Math.min(min, currval)

})

// minGrade1
// 8
// maxGrade1
// 99


const sum1 = [10,20,30,40,50].reduce((sum1,carv)=> {
    return sum1 + carv ; 
})


// sum1
// 150



