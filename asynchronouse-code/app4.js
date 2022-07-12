const fackRecuest = (url) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
     const rand  = Math.random();
     if(rand<0.3){
        reject({status: 404});
     }
     else {
const pages = {
    '/users': [
        {id:1,username:'bilbo'},
        {id:5, username:'belbo'}
    ],
    '/about': 'THIS IS THE ABOUT PAGE!!'
};
const data = pages[url];
resolve({status:200,data});
     }
        },1000)
    });
};

fackRecuest('/uabout')
.then((res)=> {
    console.log('status code', res.status)
    console.log('data', res.data)
    console.log('REQUEST WORKED');

})
.catch((res)=> {
    console.log(res.status);
    console.log('REQUEST FAILED');
})