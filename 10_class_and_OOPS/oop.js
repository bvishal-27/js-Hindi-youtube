const user={

    username : " B Vishal",
    loginCount:8,
    signedIn:true,
    getUserDetail: function(){
        //console.log(`Username ${this.username}`);
        //console.log(this);
    }
}
//console.log(this);


//*********** Constructor Function */
function User(username, login,isLogIn){
  this.username=username;
  this.login=login;
  this.isLogIn=isLogIn;
  return this
}
const UserOne = new User("B Vishal ","yes","true")
const UserTwo = new User("BV ","21","true")
console.log(UserOne);
console.log(UserTwo);