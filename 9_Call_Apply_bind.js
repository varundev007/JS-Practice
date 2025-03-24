const student = {
    name : "Varun",
    printName: function(){
        console.log(this.name)
    }
}

//student.printName()
const student2 ={
    name: "Sachin"
}

//student.printName.call(student2)


let name = {
    firstName: "Varun",
    lastName: "Dev",
    printFullName: function(){
        console.log(this.firstName + " " + this.lastName)
    }
}
// name.printFullName()

let name2 = {
    firstName: "Sachin",
    lastName: "Tendulkar"
}

// name.printFullName.call(name2)

// More generic way
let name1= {
    firstName: "Varun",
    lastName: "Dev",
}

function printFullName(hometown, state){
    console.log(this.firstName +  this.lastName + " From " +hometown + "," +state)
}

let name3= {
    firstName: "Virat",
    lastName: "Kholi"
}
// printFullName.call(name1)
// printFullName.call(name2)
// printFullName.call(name1, "Vns", "UP")
// printFullName.call(name3, "Mum", "MH")

// printFullName.apply(name1,["Vns", "UP"])
// printFullName.apply(name3, ["mum", "mh"])

//Bind method- it will return the function, later it will be envoked
printFullName.bind(name1, "Vns", "UP")()
printFullName.bind(name3, ["mum", "mh"])()
