const p = new Promise((resolve, reject) =>{
   // resolve("Promise resolved")
   setTimeout(() => {
    resolve("Promise resolved")    
   }, 10000);
})

//Older way of handling promise
function getData(){
    p.then((res) => console.log(res))
    console.log("NamasteJS")
}
//getData()

//Handling function using async await 

async function handlePromise() {
    console.log("Hello World")
    const val = await p
    console.log(val)
    console.log("Namaste JS")
}
handlePromise()


