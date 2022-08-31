console.log("page loaded...");

function edit(){
    var nameChange = document.querySelector ("#name1");
    nameChange.innerText= "Somebody";
}


function accept1(){
    const deletReq = document.querySelector (".card-list-item");
    deletReq.remove();
}


function subNum(){
    var connNum = document.querySelector (".badge")
    connNum.innerText--;
}