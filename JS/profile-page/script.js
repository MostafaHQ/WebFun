console.log("page loaded...");

var nameChange = document.querySelector ("#name1");
var deletReq = document.querySelector ("#connection1");
var deletReq = document.querySelector ("#connection2");



function edit(){
    nameChange.innerText= "Somebody";
}


function accept1(){
    deletReq.remove();
}

function cancel1(){
    deletReq.remove();
}