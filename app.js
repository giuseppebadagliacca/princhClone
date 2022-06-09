function jump(feild, move){
  console.log(feild.value.length, feild.maxLength)
  if(feild.value.length >= feild.maxLength){
    document.getElementById(move).focus()
  }
}