let currNum = "";
let numOne = "";
let oper = "";

let disp = document.querySelector("#display");

function press(num) {
  currNum += num;
  console.log(currNum);
  disp.innerText = currNum;
}

function setOP(op) {
  oper = op;
  numOne = currNum;
  currNum = "";
  disp.innerText = "0";
}

function clr() {
  currNum = "";
  numOne = "";
  disp.innerText = "0";
  oper = "";
}
function calculate() {
  let res;
  if (oper === "+") {
    res = parseFloat(numOne) + parseFloat(currNum);
  }
  disp.innerText = res;
  if (oper === "-") {
    res = parseFloat(numOne) - parseFloat(currNum);
  }
  disp.innerText = res;

  if (oper === "*") {
    res = parseFloat(numOne) * parseFloat(currNum);
    disp.innerText = res;
  }
  if (oper === "/") {
    res = parseFloat(numOne) / parseFloat(currNum);
    disp.innerText = res;
  }
}
