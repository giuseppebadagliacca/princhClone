let printID = []
function jump(feild, move){
  if(feild.value.length >= feild.maxLength){
    document.getElementById(move).focus()
  }
  printID.push(feild.value);
}

function moveOn(){
  const body =  document.querySelector('body');
  body.style.textAlign = 'center'
  body.style.marginTop = '40px'
  body.innerHTML =
  `
  <h1>Job Number:${printID.join('')} has been sent to print</h1>


  `
}