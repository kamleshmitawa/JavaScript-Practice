const o = new Object()
o.firstName= "kamlesh"
o.lastName= "mitawa"
o.isStudying= true
o.greet = function(){
  console.log("hii")
}


const o1 = o
o.a = 'new value'
console.log(o1.a)


const o2 = {
  firstName: "kamlesh",
  lastName: 'saini',
  isTeaching : true,
  greet: function(){
    console.log('hello')
  },
  address: {
    street: 'gate-no:4',
    number: 5,
  },
}
