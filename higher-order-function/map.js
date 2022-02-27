/*
Higher Order Functions 
----> is a function that accepts functions as parameters and /or returns function.

-Map
    ---method craetes a new array
    ---populated with the results of calling provided function on evry element
    --- in the calling array


    - Syntax map (callBackFunction(Element,Index?array){ }, thisArg)
        -Elment => The current element being processed in the array
        -Index => The index of the current element being processed in the array
        -Array => The current Array

    Notes
        -Map Return A new Array 
    Examples 
        -Anonymous Function  
        -Named Function       
*/

let array=[1,2,3,4,5,6];
let newArray=[];
for (let index = 0; index < array.length; index++) {
    newArray.push(array[index]*2);
    
}
console.log(newArray);

//Same Idea With Map and Arrow Function

let addSelf= array.map((element)=>element+element)

console.log(addSelf);

//Map with Normal Function
function addition(ele){
    return ele+ele;
}

let addSelf2=array.map(addition);

console.log(addSelf2);


/*
    Map 
        -Swap Cases
        -Inverted Numbers
        -Ignore Boolean Value
        
*/

let swappingCases='elZERo';
let invertedNumbers=[1,-10,-20,15,100,-30];
let ignoreBoolean = 'Elz123er4o';

let swapped=swappingCases.split("").map((element)=>{
     return element.toUpperCase()===element ?  element.toLowerCase() :element.toUpperCase();
}).join("");


console.log(swapped);

let invertedNumsNew= invertedNumbers.map((element)=>{
            return  -element;
});

console.log(invertedNumsNew);

let ignoreBooleanNew =ignoreBoolean.split("").map((element)=>{
       return isNaN(Number(element)) ? element : "";
}).join("");

console.log(ignoreBooleanNew);