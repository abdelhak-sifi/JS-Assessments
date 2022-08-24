console.log('-----Task 1-----');
//get with querySelector
let div=document.querySelector('div');
console.log(div.innerHTML);
div=document.querySelector('#elzero');
console.log(div.innerHTML);
div=document.querySelector('.element');
console.log(div.innerHTML);
div=document.querySelector('[name="js"]');
console.log(div.innerHTML);
//get with querySelectorAll
div=document.querySelectorAll('div');
console.log(div[0].innerHTML);
div=document.querySelectorAll('#elzero');
console.log(div[0].innerHTML);
div=document.querySelectorAll('.element');
console.log(div[0].innerHTML);
div=document.querySelectorAll('[name="js"]');
console.log(div[0].innerHTML);
//get with : id, class, name, tag
div=document.getElementById('elzero');
console.log(div.innerHTML);
div=document.getElementsByName('js');
console.log(div[0].innerHTML);
div=document.getElementsByTagName('div')
console.log(div[0].innerHTML);

console.log('-----Task 2-----');

for (let i = 0; i < document.querySelectorAll('img').length; i++) {
    document.querySelectorAll('img')[i].setAttribute('src','https://0.academia-photos.com/115498453/52807747/40924456/s200_abdelhak.sifi.jpeg');
    document.querySelectorAll('img')[i].setAttribute('value',i);
    document.querySelectorAll('img')[i].setAttribute('Alt','Me Avatar');
    
}
console.log('-----Task 3-----');

function clickInput(){
    element=document.querySelector('[name=dollar]');
    document.getElementsByClassName('result')[0].innerHTML=`{${document.querySelector('[name=dollar]').value}} USD Dollar = {${document.querySelector('[name=dollar]').value*15.6}} Egyptian Pound`;
}

