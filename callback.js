// Callback Function - A callback function is a function that is 
// passed as an argument to another function, and is called 
// (executed) later—usually after some task is completed.

function fatchUserData(userId, callback){
    setTimeout(() => {
        if(userId){
            const user = {
              user: userId,
              name: 'shailendra',
              email: 'infoshailendra1003@gmail.com'
            };

            callback(null, user);
        } else{
            callback( new Error('Invalid user id'));
        }
        
    }, 1000);

}

fatchUserData(123, (error,user) =>{
if(error){
    console.log("Error Fetch user", error)

}else{
   console.log('user data', user);
}
})