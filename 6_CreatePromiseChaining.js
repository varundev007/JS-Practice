const cart =["shoes", "pant ", "kurta"]

const promise = createOrder(cart) // return orderId

promise.then(function(orderId){
    //proceedToPayment(orderId)
    console.log(orderId)
    return orderId    
})
.then(function(orderId){
    return proceedTopayment(orderId)
})
.then(function(paymentInfo){
    console.log(paymentInfo)
})
.catch(function(err){
    console.log(err.message)
})

function createOrder(){

    const pr = new Promise(function(resolve, reject){
        //create order
        //validate order
        //orderid return
        if(!validateCart(cart)){
            const err = new Error("Invalid cart")
            reject(err)
        }
        const orderId = "12345"
        if(orderId){
          //  resolve(orderId)
          // setting time out to resolve orderID
          setTimeout(function(){
            resolve(orderId)
          },5000)
        }
    })
    return pr
}
function proceedTopayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("Payment Successful")
    })
}
function validateCart(cart){
    return true
}