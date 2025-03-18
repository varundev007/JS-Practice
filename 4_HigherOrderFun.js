const radius = [1,2,3,4]

const area = function (radius){
    return Math.PI * radius * radius
}
const circimference = function(radius){
    return 2 * Math.PI * radius
}
const daimeter = function(radius){
    return 2*radius
}

const calculate = function(arr, logic){
    const output = []
    for(let i =0 ; i< arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output
}
console.log(calculate(radius, area))  // radius.map(area)
console.log(calculate(radius, circimference)) //radius.map(circumference)
console.log(calculate(radius,daimeter)) //radius.map(daimeter)
// Map is a higher order function 
// Above we did implemention of map function
