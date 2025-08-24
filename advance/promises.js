const promiseOne = new Promise(function(resolve , reject){
    setTimeout(function(){
    resolve({username:'harish',password:'12345'});
    },1000)
})
    promiseOne.then(function(user){
    console.log(user);
})


 
const promiseTwo = new Promise(function(resolve, reject){
    setTimeout(function(){
    let error = false;
    if(!error)
        {resolve({username:'javascipt', youtube:'chai aur code'})
    }
    else{('error something went wrong in js series')}
    },1000)
})

promiseTwo.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function(){
    console.log('finally executed')
})