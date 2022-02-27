/* 
    ForEach
        mehtod executes a provided function once for each array element. 
        with all elements tha pass the tes implemented by the provided function.
        
    Syntax forEach (callBackFunction (element,index,arr){} ,thisArg)
        -Elment => The current element being processed in the array
        -Index => The index of the current element being processed in the array
        -Array => The current Array   

    Notes Doesnt Return Anything [Undefined]
    Break will not Break the loop    
*/

let allLi = document.querySelectorAll("ul li");
let divs= document.querySelectorAll(".content div");
allLi.forEach((element)=>{
     element.onclick= function(){
         //Remove active from all <li></li>
         allLi.forEach((element)=> {
             element.classList.remove('active');
         })
         //Add active to clicked <li></li>
        this.classList.add('active');
        //Hide All Divs
         divs.forEach((element)=>{
             element.style.display='none';
         })
     }   
});


