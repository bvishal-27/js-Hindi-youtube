class user{
    constructor(email,password){
    this.email=email;
    this.password=password;
    }
get email(){
return this._password.toUpperCase()
}
set email(value){
    this._password=value.toUpperCase()
}

}

const getset= new user("vishal@bhangare","abcdefgh")
console.log(getset.email)