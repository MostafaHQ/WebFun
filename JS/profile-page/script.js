console.log("page loaded...");

function edit(){
    var nameChange = document.querySelector ("#name1");
    nameChange.innerText= "Somebody";
}


function accept1(){
    const deletReq = document.querySelector (".card-list-item");
    const connNum = document.querySelector ("#numReq");
    const connections = document.querySelector ("#yourConn");
    connNum.innerText--;
    connections.innerText++;
    deletReq.remove();
}

function ignore(){
    const deletReq = document.querySelector (".card-list-item");
    deletReq.remove();
    deletReq.remove();
}
