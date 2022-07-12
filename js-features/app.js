// defult parameter
// function multiply(x,y){
//     if(typeof y === '')
//     return x * y;
// }


function multiply(x,y){
    y = typeof y === 'undefined' ? 1:y
    return x * y;
}

//////
//////


const great =(person,greeting = 'hi',puctuation ='!') => {
    console.log(`${greeting},${person},${puctuation}`)
}

///////////
////////
/////////
///////

// great('anya')
// app.js:18 hi,anya,!
// undefined
// great(22)
// app.js:18 hi,22,!
// undefined

function giveMeFour(a,b,c,d){
    console.log('a',a)
    console.log('b',b)
    console.log('c',c)
    console.log('d',d)

}

const colors = ['red','orange','yellow','green']



// giveMeFour(colors)
// app.js:34 a (4) ['red', 'orange', 'yellow', 'green']
// app.js:35 b undefined
// app.js:36 c undefined
// app.js:37 d undefined
// undefined


// giveMeFour(...colors)
// app.js:34 a red
// app.js:35 b orange
// app.js:36 c yellow
// app.js:37 d green
// undefined

///////////
////////////
///////////
//////////

// spread array 




const cats =['cherazy','hymalaya','streetCats'];

const dogs =['german','hasky','betpool'];
const beard =['love beard','kaskoo'];

const animalHome =[...beard,...cats,...dogs];


// animalHome
// (8) ['love beard', 'kaskoo', 'cherazy', 'hymalaya', 'streetCats', 'german', 'hasky', 'betpool']


/////////
////////////
//////

// spread object 


const fline = {
    legs : 4,
    family : 'felidae'
};


const canine = {
    family : 'canine'
    ,furry :true  
} ;

const dog = {
    ...canine,
    isPet : true,
    adorable: true 
};





// dog
// {family: 'canine', furry: true, isPet: true, adorable: true}
// adorable: true
// family: "canine"
// furry: true
// isPet: true
// [[Prototype]]: Object
 


//////////////
/////////////
/////////////
/////////////


// argument rest 
// function sum(a,b,c,d,e,f,g,h,i,j,k){

// }

function sum(){
    console.log(arguments);


}


// sum(1,2,3)
// app.js:132 
// Arguments(3) [1, 2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 0: 1
// 1: 2
// 2: 3
// callee: ƒ sum()
// length: 3
// Symbol(Symbol.iterator): ƒ values()
// [[Prototype]]: Object

// function sum2() ={ 
//     arguments.reduce((total, curVal) => {
//         return total + curVal;
//     })
// }
 

// ///////
/////////
////////////
///////////

// rest arameter 

function sum3(...nums){
    return nums.reduce((total,currval) => {
        return total + currval
    })
}
// sum3(1,2,3)
// 6

/////////////
///////
////////
/////////

// destructure array 


const phone = [
    'iphone11',
    'a23',
    '9t',
    'reno 3'
    ,'poco'
    ,'note 10',
    'y9'


]
// const apple = phone[1];
// const samsung = phone[2];
// const redmi = phone[3];


const [apple,samsung,redmi] = phone;


// samsung
// 'a23'
// apple
// 'iphone11'
// redmi
// '9t'


const [,,,oppo,xuami,nokia]= phone;

// oppo
// 'reno 3'

//////////
/////////
///////////
/////////
/////////




// destructuring object 

const marka = {
    adress:11134,
    kapetal:"Amman" ,
    country:" jordan",
    street:"strret hamza"
}

const {country,adress} = marka;

// country
// ' jordan'
// adress
// 11134






























