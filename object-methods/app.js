// const getNum = (arr)=> {
//     const max = Math.max(...arr);
//     const min =Math.min(...arr);
//     const sum =arr.reduce((sum, r ) => 
//          sum + r);
//     const avg = sum / arr.length;
//     return {
//         max
//         ,min
//         ,sum
//         ,avg

//     }

//     }
// const reviews =[4.5,5.0,3.44,5.66,4.22];


// const state =getNum(reviews);

// // state
// // {max: 5.66, min: 3.44, sum: 22.82, avg: 4.564}


// function pick(arr){
//     const idx =Math.floor(Math.random() * arr.length);
//     return arr(idx);
// }

// function getCard(){
//     const value = [
//         '1',
//         '2',
//         '3',
//         '4',
//         '5',
//         '6',
//         '7',
//         '8',
//         '9',
//         '10',
//         'J',
//         'Q',
//         'K',
//         'A'
//     ];
//     const suits =['clubs','spades','hearts','diamond'];
//     const value2 =pick(values);

// };




function sayHi() {
    console.log("HI")
    console.log(this);
}


// sayHi()
// app.js:56 HI
// app.js:57 Window {window: Window, self: Window, document: document, name: '', location: Location, …}



const person = {
    firstN: 'fa3fot',
    lastN:'nazal',
    nickName:'palata',
    fullname () {
console.log(this);
    }
}



// person.fullname()
// app.js:72 
// {firstN: 'fa3fot', lastN: 'nazal', nickName: 'palata', fullname: ƒ}
// firstN: "fa3fot"
// fullname: ƒ fullname()
// lastN: "nazal"
// nickName: "palata"
// [[Prototype]]: Object













