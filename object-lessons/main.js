/* */

let user={
    theName : "abdelhak",
    "live in" : "Algeria",
    thAge : 28,
    sayHello : function(){
            return `Hello I'm ${this.theName} my Age is ${this.thAge}`;
    },
}

console.log(user.theName);
console.log(user.thAge);
console.log(user.sayHello());

//how to access to object with brakect notation 

console.log(user["live in"]); 