const p1 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise resolved1")
    }, 10000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Promise resolved2")
    }, 5000)
})

async function handlePromise(){
    console.log("Hello world")
    const val1 = await p1
    console.log("Namaste JS1")
    console.log(val1)

    const val2 = await p2
    console.log("nasmte js2")
    console.log(val2)
}
handlePromise()