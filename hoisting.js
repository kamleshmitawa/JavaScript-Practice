thisIsHoisting()

function thisIsHoisting (){
  console.log("this is hoisting function")
}


thisIsNotHoisting()

const thisIsNotHoisting = function(){
  console.log('not hoisting function beacuse of const and anonymous function()')   //Error
}
