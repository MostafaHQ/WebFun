var count = 0;
var countElement= document.querySelector ("#count1");

console.log(countElement);

function add1(){
    count++;
    countElement.innerText = count + "like(s)";
    console.log(count);
}


var count2 = 0;
var countElement2= document.querySelector ("#count2");

console.log(countElement2);

function add2(){
    count2++;
    countElement.innerText = count2 + "like(s)";
    console.log(count2);
}  