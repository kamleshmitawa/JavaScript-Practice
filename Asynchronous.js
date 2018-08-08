
function PrintOne(){
  console.log('one')
}
function PrintTwo(){
  console.log('Two')
}
function PrintThree(){
  console.log('Three')
}
PrintOne()
PrintTwo()
PrintThree()

setTimeOut(PrintOne,1000)
setTimeOut(PrintTwo, 0)
PrintThree()
