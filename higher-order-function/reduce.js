/*
    Reduce  
        method execute a reducer function on each element of the array,
        resulting is a single output value

    Syntax
        reduce(callBackFunction (Accumulator, Current Value, Current Index , Source Array) {} , initialValue)
            Accumulator => the accumulted value previously returned is th last invocation
            Current Vlaue => The current element being processed in the array
            Index =>  The index of the current element being processed in the array 
                    ----- Starts from index 0 if the initValue is provoided 
                    ----- otherwise  , its starts index From 1
            Array => The Current Array
*/



let nums = [10,20,15,30];


let sum=nums.reduce((acc,current)=> acc+current,5); // 5 is the initialValue;
console.log(sum);


/*
 reduce practices
*/

theBiggest =['Bla','Propaganda','Other','AAA','Battery','Test'];

let longerWord =theBiggest.reduce((acc,current)=> acc.length> current.length ? acc : current);
console.log(longerWord);
