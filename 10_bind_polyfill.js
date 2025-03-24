let name= {
    firstName : "Varun",
    lastName : "Dev"
}
let name1= {
    firstName: "Virat",
    lastName:"Kohli"
}
function printFullName(hometown, state, country){
    console.log(this.firstName + " " + this.lastName + hometown + ", " +state+ " "+country)
}
//printFullName.bind(name, " VNS ", "UP")()


Function.prototype.mybind = function(...args){
    // this-> printFullName
    let obj = this
    return function(...args2){
        obj.apply(args[0], [...args.slice(1), ...args2])
    }
}



printFullName.mybind(name, " VNS ")("up")