console.log("----Task 1----");

let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix=mix.map(function(element){
    return typeof element==='number' ? "" : element;
}).reduce(function(accu,ele){
    return accu+ele;
})

console.log(newMix);

console.log("----Task 2----");

let myString = "EElllzzzzzzzeroo";

let myNewString=myString.split("").filter(function(element,index,self){
   return self.indexOf(element)===index;
}).join("");

console.log(myNewString);

console.log("----Task 3----");

let myArray = ["E", "l", "z", ["e", "r"], "o"];

let myNewArray=myArray.reduce(function(accu,current){
       return typeof current==='string' ?  accu+current : accu+current.join('')
});

console.log( myNewArray)

console.log("----Task 4----");

let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
let newNumArray=numsAndStrings.filter((element)=> typeof element==='number').map((element)=> -element); // [-1, -10, 10, 20, -5, -3]
console.log(newNumArray);

console.log("----Task 5----");

let nums = [2, 12, 11, 5, 10, 1, 99];

let newNums=nums.reduce(function(acc,curr){
    if(curr%2===0){
        return curr*acc;
    }else{
        return curr+acc;
    }

},1);

console.log(newNums);