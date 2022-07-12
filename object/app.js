const fitBitData = {
    totalSteps : 542325,
   totalMiles: 201.99 ,
avgCakorBurn : '5 of 7' ,
avgGoodSleep : '2:13' 
};
const numbers = {
    100 : 'one hundered',
    16 : 'sixteen'
};
// number.100
// VM111:1 Uncaught SyntaxError: Unexpected number


// numbers[100]
// 'one hundered'

const palette = {
    red : '#eb4d4b',
    yellow :'#f9ca24'


}

let mestryColor = 'yellow';

// palette[mestryColor]
// '#f9ca24'




//adding and updating
const userReviews ={};

userReviews['queenBee']= 4.9;
userReviews.mrSmith =8.8;

// userReviews
// {queenBee: 4.9, mrSmith: 8.8}

userReviews['queenBee'] += 2;
userReviews.mrSmith++;

// userReviews
// {queenBee: 6.9, mrSmith: 9.8}

//nested array and object
const student = {
    fname : 'david',
    lname : 'jones',
    strengths : ['music ', 'programig'],
    exams : {
        mid : 92,
        final :77 
    }
};

const avg = (student.exams.mid + student.exams.final) /2;





////array and object === and = % ==
let nums = [1,2,3 ];
let mystery = [1,2,3 ];

// nums == mystery
// false

// nums === mystery 
// false

