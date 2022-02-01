console.log('----Arrays lesson---');

/*
    Arrays
        Create Arrays (Two Methods) new array AND []
        Access Arrays Elements 
        Nested Arrays
        Change Arrays Elements
        Check For Array Array.isArray(arr);
*/

let arr1= Array('abdelhak','omar','aimen');
let arr2=['abdelhak','omar','aimen',['abdo','kader']];

console.log(`Hello ${arr2[0]}`);

console.log(`Hello ${arr2[2]}`);

console.log(arr2[3][0][3]);

/* using length in array */

console.log(Array.isArray(arr2));
console.log(arr2.length);

/* How add an item to array dynamic */

arr2[arr2.length]='sifi';
console.log(arr2);


/*
    --> Arrays Methods (Adding and Removing)
    --> unshift("","") Add element to the first
    --> push("","") add element to the end 
    --> shif() Remove first element from array 
    --> pop() Remove last element from array 
*/

let Friends=["Ahmed","Mohamed","Sayed","Alaa"];
console.log(Friends);
console.log(Friends.unshift("Abdelhak","Abdelhafid")); //return length of array
console.log(Friends);
console.log(Friends.push("Ismail","Nourddine")); //return length of array
console.log(Friends);
let firstElement=Friends.shift(); //remove first element and return it 
console.log(Friends);
let lastElement=Friends.pop(); //remove last element and return it 
console.log(Friends);


/*
    -> Array Methods (Searching)
    indexOf (Search element, From Index [OPT])
    lastIndexOf (Search element ,From Index [OPT])
    includes (valueToFind,FromIndex [OPT]) [ES7]

*/

Friends=["Ahmed","Mohamed","Sayed","Alaa","Ahmed","Mohamed"];

console.log(Friends.indexOf("Mosqsq")); // if exist return index of element in array else return -1
console.log(Friends.lastIndexOf("Asq")); // search from last of array and return index of elem if exist else return -1
console.log(Friends.includes("Ahmed")); //return true if element exist in array else return false


/**
   -Array Methods (Sorting)
        -> sort (function [Opt])
        -> reverse  
 */

Friends=[10,"Ahmed","Mohamed","90","Sayed",1000,100,20,"10",-20,-10];
console.log(Friends);
console.log(Friends.sort());  //sort element of array
console.log(Friends.reverse());  //reverse element of array


/*
    Array Methods [Slicing]
     -> slice(Start[Opt],End (Opt) Not Including End)
     -> slice() All Array
     -> if start is undefined => 0
     -> negative Count From End
     -> If End  undefined || > Indexes => Slice to the End Array.length
     -> Return New Array
     -> splice(Start [Mand],DeleteCount [Opt][0 No Remove], The Item To add [Opt])
     -> If Negative => Start From The End     
      
*/

Friends=["Ahmed",,"Sayed","Ali","Oussama","Gamal","Ameer"];

console.log(Friends.slice(1))
console.log(Friends.slice(1,4))
console.log(Friends.slice(-3))
