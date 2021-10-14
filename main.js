let a=0;
let op;

function clrscr(){
  a = 0;
  op = undefined;
  document.getElementById('input').value = "0";  
}

function backspace(){
  a = 0;
  op = undefined;
  if(document.getElementById('input').value.length>1){
    document.getElementById('input').value = document.getElementById('input').value.slice(0, -1);
  }
  else{
    document.getElementById('input').value = "0";
  }
}

function sum(){
  let input = document.getElementById('input').value;
  a = Number(input);
  document.getElementById('input').value = "";
  op = "+";
}
function subtract(){
  let input = document.getElementById('input').value;
  a = Number(input);  
  document.getElementById('input').value = "";
  op = "-";
}
function multiply(){
  let input = document.getElementById('input').value;
  a = Number(input);  
  document.getElementById('input').value = "";
  op = "*";
}
function divide(){
  let input = document.getElementById('input').value;
  a = Number(input);  
  document.getElementById('input').value = "";
  op = "/";
}



function equalto(){
  if(op=="+"){
    document.getElementById('input').value = a + Number(document.getElementById('input').value);
  }
  else if(op=="-"){
    document.getElementById('input').value = a - Number(document.getElementById('input').value);
  }
  else if(op=="*"){
    document.getElementById('input').value = a * Number(document.getElementById('input').value);
  }
  else if(op=="/"){
    document.getElementById('input').value = a / Number(document.getElementById('input').value);
  }
}









function one(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '1';
}
function two(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '2';
}
function three(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '3';
}
function four(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '4';
}
function five(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '5';
}
function six(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '6';
}
function seven(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '7';
}
function eight(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '8';
}
function nine(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '9';
}
function zero(){
  if(document.getElementById('input').value=="0"){
    document.getElementById('input').value = "";
  }
  document.getElementById('input').value = document.getElementById('input').value + '0';
}



