const arr = [5,2,9,6,3]
//To find max 
function findMax(arr){
    let max = 0
    for(let i=0 ; i< arr.length ; i++){
        if(arr[i] > max){
            max= arr[i]
        }
    }
    return max
}
// using reduce funtion- 
//To find sum of an array using reduce function
const output = arr.reduce(function (acc,curr){
    acc= acc+curr
    return acc
}, 0)
console.log(output)

// Find max in arr using reduce
const maxNum = arr.reduce((acc, curr)=>{
    if(curr > acc){
        acc=curr
    }
    return acc
}, 0)
console.log(maxNum)

//Example for map function
const user = [
    {firstName: "Varun", LastName: "Dev", age: "26"},
    {firstName: "Donald", LastName: "Trump", age: "75"},
    {firstName: "Elon", LastName: "Musk", age: "50"},
    {firstName: "Katrina", LastName: "Kaif", age: "26"}
]

//concate firstname + last name in the array
const ans = user.map((x) => {
   return x.firstName + " "+ x.LastName
})
console.log(ans)

//desired output acc {26: 2, 75:1, 50:1}
const answ = user.reduce((acc, curr) =>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age]
    }
    else{
        acc[curr.age] = 1
    }
    return acc
}, {})
console.log(answ)

//First name of all the people whos age is <30
//we used the concept of chainings
const ageLess30= user.filter((x) => x.age<30).map((x) => x.firstName)
console.log(ageLess30)

//Same problem by using reduce function
const ageLessThen30 = user.reduce((acc, curr)=>{
    if(curr.age <30){
        acc.push(curr.firstName)
    }
    return acc
},[])
console.log(ageLessThen30)