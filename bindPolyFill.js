// Implement bind method

let name = {
  firstName: "Swapnil",
  lastName: "Trivedi"
}

let printName = function(hometown, state, country) {
  console.log(this.firstName + " " + this.lastName + " " + hometown + " " + state + " " + country)
}

let printMyName = printName.bind(name, "Baroda", " Gujarat")
printMyName("India")

Function.prototype.mybind = function(...args) {
  let obj = this,
  params = args.slice(1)
  console.log('params', params)
  return function(...args2) {
    obj.apply(args[0], [...params, ...args2] )
  }
}


let printMyNameAgain = printName.mybind(name, "baroda", "Gujarat")
printMyNameAgain("India")