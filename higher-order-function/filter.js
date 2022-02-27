/* 
    Filter
        mehtod create new array 
        with all elements tha pass the tes implemented by the provided function.
        
    Syntax filter (callBackFunction (element,index,arr){} ,thisArg)
        -Elment => The current element being processed in the array
        -Index => The index of the current element being processed in the array
        -Array => The current Array   
*/


let friends = ['Ahmed','Sameh','Sayed','Asmaa','Amgad','Israa'];


let newFriends = friends.filter((element)=> element.startsWith("A") );

console.log(newFriends);

let numbers=[11,20,2,5,17,10];

evenNumbers= numbers.filter( (ele) => ele % 2 === 0 );

console.log(evenNumbers);


/* 
        Filter Pratices
*/

let sentence='I Love Foood Code Too Playing Much';

let fltSentence = sentence.split(" ").filter((element )=> element.length<=4).join(" ");

console.log(fltSentence);


let ignoreNumbers ="Elz123er4o";

let ign = ignoreNumbers.split("").filter((element)=> isNaN(Number(element))).join("");

console.log(ign);
// Mix Map and Filter 
let mix ='A13BS2ZX';

let mixed=mix.split('').filter((element)=>!isNaN(Number(element))).map((element)=>Number(element)*Number(element)).join('');



