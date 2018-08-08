function makefunctionArray(){
  const arr= []

  for (var i = 0; i < 5; i++){
    arr.push(function() {
      console.log(i)  })
  }
  return arr
}

const arr = makefunctionArray()
arr[0]()
