console.log("%c -----functions lessons-----","font-size : 25px;");

//you can call the function before the function declaration
console.log(calc(10,20));

function calc(num1,num2){
    return num1+num2;
}


//Anonymous function 

let calculator = function (num1,num2){
    return num1*num2;
}

//call anonymous function always after the declaration (like variables initialization) 
console.log(calculator(2,3));

// somtimes you should anonymous function 

/* Example of anonymous function */
setTimeout(function ()  {
    console.log("hello");
}, 2000);

// Return Nested Function

//Example 1 
/*
function sayMessage(fName,lName){
    let  message ='Hello';
    //Nested Function
    function concatMsg(){
        message =`${message} ${fName} ${lName}`;
    }

    concatMsg();

    return message;

}

console.log(sayMessage('Abdelhak' , 'SIFI'));
// Exmaple 2 
function sayMessage(fName,lName){
    let  message ='Hello';
    //Nested Function
    function concatMsg(){
        return `${message} ${fName} ${lName}`;
    }

    return concatMsg();

}

console.log(sayMessage('Abdelhak' , 'SIFI'));
*/

//Example 3
function sayMessage(fName,lName){
    let  message ='Hello';

    function getFullName(){
        return `${fName} ${lName}`;
    }
    //Nested Function
    function concatMsg(){
        return `${message} ${getFullName()}`;
    }

    return concatMsg();

}

console.log(sayMessage('Abdelhak' , 'SIFI'));


/*Arrow Function*/

// this type of function do not accept parameters

let print= (num1,num2)=> {
     return num1+num2;
}

console.log(print(10,50));



