for(let i = 1;i<=10;i++){
console.log('HELLO');
}

// 10 HELLO


for(let num =1 ;num <= 20;num++){
    console.log(`${num} * ${num} = ${num * num}`);
};

// 1 * 1 = 1
// app.js:7 2 * 2 = 4
// app.js:7 3 * 3 = 9
// app.js:7 4 * 4 = 16
// app.js:7 5 * 5 = 25
// app.js:7 6 * 6 = 36
// app.js:7 7 * 7 = 49
// app.js:7 8 * 8 = 64
// app.js:7 9 * 9 = 81
// app.js:7 10 * 10 = 100
// app.js:7 11 * 11 = 121
// app.js:7 12 * 12 = 144
// app.js:7 13 * 13 = 169
// app.js:7 14 * 14 = 196
// app.js:7 15 * 15 = 225
// app.js:7 16 * 16 = 256
// app.js:7 17 * 17 = 289
// app.js:7 18 * 18 = 324
// app.js:7 19 * 19 = 361
// 20 * 20 = 400

// infinit loop 
// for (let i =1 ;i !== 20;i+=2 ){
//     console.log(i)
// }

// for loop and Array


const examScores =[98,77,84,91,57,66];

for(let i=0;i < examScores.length;i++){
    console.log(examScores[i]);
}


const myStudents = [
    {
        firstName :'zeus',
        grade : 86
    },
    {
        firstName : 'Artemis',
        grade : 97
    },
    {
        firstName : 'hera',
        grade : 72
    },
    {
        firstName:'apollo',
        grade : 90
    }
]
for (let i =0 ;i < myStudents.length;i++){
    // console.log(`${}`)
    let student = myStudents[i];
    // console.log(student);
    console.log(`${student.firstName} scored ${student.grade}`)}


// }98
// app.js:44 77
// app.js:44 84
// app.js:44 91
// app.js:44 57
// app.js:44 66
// app.js:70 zeus scored 86
// app.js:70 Artemis scored 97
// app.js:70 hera scored 72
// app.js:70 apollo scored 90

const word = 'stressed';
// for (let i = word.length -1;i >= 0;i--){
//     console.log(i);
// }


// 7
// 6
// 5
// 4
// 3
// 2
// 1
// 0

// for (let i = word.length -1;i >= 0;i--){
//     console.log(word[i]);
// }

// d 
// e 
// s 
// e 
// r 
// t 
// s 

let reversedWord = '';
for (let i = word.length -1;i >= 0;i--){
reversedWord += word[i];
console.log(reversedWord);
}

// d
// app.js:114 de
// app.js:114 des
// app.js:114 dess
// app.js:114 desse
// app.js:114 desser
// app.js:114 dessert
// app.js:114 desserts









//nested loop

for (let i = 1;i <= 10;i++){
    console.log('OUTER LOOP: ',i);
    for (let j=10;j>=0;j -= 2){
console.log ('INNER LOOP' , j);
    }
}

// OUTER LOOP:  1
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  2
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  3
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  4
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  5
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  6
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  7
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  8
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  9
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0
// app.js:137 OUTER LOOP:  10
// app.js:139 INNER LOOP 10
// app.js:139 INNER LOOP 8
// app.js:139 INNER LOOP 6
// app.js:139 INNER LOOP 4
// app.js:139 INNER LOOP 2
// app.js:139 INNER LOOP 0



const gameBoard = [
    [4,32,8,4],
    [64,8,32,2],
    [8,32,16,4],
    [2,8,4,2]
];

for (let i =0 ; i<gameBoard.length;i++){
    console.log(gameBoard[i]);
};

// Array(4)
// 0: 4
// 1: 32
// 2: 8
// 3: 4
// length: 4
// [[Prototype]]: Array(0)
// Array(4)
// 0: 64
// 1: 8
// 2: 32
// 3: 2
// length: 4
// [[Prototype]]: Array(0)
// app.js:224 
// Array(4)
// 0: 8
// 1: 32
// 2: 16
// 3: 4
// length: 4
// [[Prototype]]: Array(0)
// app.js:224 
// Array(4)
// 0: 2
// 1: 8
// 2: 4
// 3: 2
// length: 4
// [[Prototype]]: Array(0








// while loop
let j =0;
while(j <= 6){
console.log(j);
j++;
}

// 0
// 1
// 2
// 3
// 4
// 5
// 6

// break loop

for (let i=0 ;i<10;i++){
    console.log(i);
    if (i === 5){
        break;
    }
}

// 0
// 1
// 2
// 3
// 4
// 5







// for of


let subreddits = ['soccer','popheads', 'cringe', 'books'];

for(let i = 0;i <subreddits.length; i++){
    console.log(subreddits[i]);
    
}


// soccer
// app.js:308 popheads
// app.js:308 cringe
// app.js:308 books

for(let sub of subreddits){
    console.log(sub);
}


// soccer
// app.js:308 popheads
// app.js:308 cringe
// app.js:308 books


for (let char  of 'ahmad'){
    console.log(char.toUpperCase());
}

// A
// app.js:330 H
// app.js:330 M
// app.js:330 A
// app.js:330 D


// for and for of 


const magicSquare = [
    [2,7,6],
[9,5,1],
[4,3,8]
];

for(let i =0 ;i < magicSquare.length;i++){
    let row = magicSquare[i];
    for(let j =0 ;j <row.length;j++){
        console.log(j);

    }
}

// 0
// app.js:352 1
// app.js:352 2
// app.js:352 0
// app.js:352 1
// app.js:352 2
// app.js:352 0
// app.js:352 1
// app.js:352 2


for(let i =0 ;i < magicSquare.length;i++){
    let row = magicSquare[i];
    for(let j =0 ;j <row.length;j++){
        console.log(row[j]);

    }
}


// 2
// app.js:371 7
// app.js:371 6
// app.js:371 9
// app.js:371 5
// app.js:371 1
// app.js:371 4
// app.js:371 3
// app.js:371 8




for(let i =0 ;i < magicSquare.length;i++){
    let row = magicSquare[i];
    let sum = 0 ;
    for(let j =0 ;j <row.length;j++){
        // console.log(row[j]);
        sum += row[j];

    }
    console.log(`${row} summed to ${sum}`);
}
// 2,7,6 summed to 15
// app.js:398 9,5,1 summed to 15
// app.js:398 4,3,8 summed to 15

for(let row of magicSquare){
    let sum =0;
    for(let num of row){
        sum += num ;
    }
    console.log(`${row} summed to ${sum}`);
}


// 2,7,6 summed to 15
// app.js:398 9,5,1 summed to 15
// app.js:398 4,3,8 summed to 15










// for of object 

const moveReviews ={
    Arrival    :9.5,
    Alien      :9,
    Amelie     :8,
    'In Bruges':9,
    Amama      :4,
    'koko '    :9,
    carlena    :3.2
};

for (let move of Object.keys(moveReviews)){
    console.log(move);
}

// Arrival
// app.js:439 Alien
// app.js:439 Amelie
// app.js:439 In Bruges
// app.js:439 Amama
// app.js:439 koko 
// app.js:439 carlena



for (let move of Object.values(moveReviews)){
    console.log(move);
}


// 9.5
// app.js:453 9
// app.js:453 8
// app.js:453 9
// app.js:453 4
// app.js:453 9
// app.js:453 3.2











// for in object


const jeopardy = {
    regularPlay      :9234234,
    watsonChallenge  :3423423,
    tournament       :4234234,
    battleOfTheDecades:2343244
};


for(let prop in jeopardy){
    console.log(prop);
}

// regularPlay
// app.js:487 watsonChallenge
// app.js:487 tournament
// app.js:487 battleOfTheDecades


for(let prop in jeopardy){
    console.log(prop);
    console.log(jeopardy[prop]);

}

// regularPlay
// app.js:498 9234234
// app.js:497 watsonChallenge
// app.js:498 3423423
// app.js:497 tournament
// app.js:498 4234234
// app.js:497 battleOfTheDecades
// app.js:498 2343244


for(let k in [88,99,77,66]){
    console.log(k);
}

// 0
// app.js:513 1
// app.js:513 2
// app.js:513 3




