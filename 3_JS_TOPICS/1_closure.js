function x(){
    var a=11
    return function y(){
        console.log(a)
    }
}
var z= x()
console.log(z)
z()