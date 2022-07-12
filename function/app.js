function grumpus(){
console.log('ugh..you again');
console.log('for the last time...');
console.log('leave me alone...');
}

// nothing in console

console.log(grumpus());


// ugh..you again
// app.js:3 for the last time...
// app.js:4 leave me alone...

grumpus();

// ugh..you again
// app.js:3 for the last time...
// app.js:4 leave me alone...

function rollDie() {
    let roll = Math.floor(Math.random() * 6) +1;
    console.log(`Rolled: ${roll}`);
};
rollDie();

// add (rolled number random)

function throwdice(){
    for(i=0 ;i<=6;i++){
        rollDie();
    }
}

throwdice();



function great(nickname){
    console.log(nickname);
    console.log('HI');

}
great('ali');


// ali
// app.js:42 HI


function square(num){
    console.log(num * num);
}
square(4);

// 16


function sum(x,y){
    console.log(x + y);
}
sum(6,7);

//13


// return

function square(x) {
    return x *x ;
  
}

// square(4)
// 16

function isPurple(color){
    if (color.toLowerCase() === 'purple'){
        return true;
        console.log('woow');
    }
    else {
        return false;
    }
};


function containsPurple(arr){
    for(let color of arr){
        if(color === 'purple' || color === 'magenta'){
            return true;
        }
        return false;
    }
 };
 
 
    //password function

//     function ivaled(password,username){
//         if(password.lenght > 8 ){
//        return false;
 
//         }
//         if(password.indexOf(' ') !== -1){
//             return false;
//         }
//     if(password.indexOf(username) !== -1 ){
// return false;
//     }
// return true;
//     };



    function ivaled(password,username){
        { 
        if ((password.lenght < 8 ) || (password.indexOf(' ')  !== -1) || (password.indexOf(username) !== -1) );  
    
     return false; 
    }
return true;

     
    };




    // avarage function 



    //write a function to find the avarage value in an array of numbers
    //avg([0,50])//25
    //avg ([75,76,80,95,100]) //85.2

    function avg(arr){
        let total = 0;
        for(let num of arr){
            total += num;

        }
        return total / arr.lenght;
        
    }



