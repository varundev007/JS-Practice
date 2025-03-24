let multiply = function(x,y){
    return x*y
}

let multiplyTwo= multiply.bind(this, 2)
console.log(multiplyTwo(5))

//By using closure
let multiply1 = function(x){
    return function(y){
        return x*y
    }
}

console.log(multiply1(2)(3))