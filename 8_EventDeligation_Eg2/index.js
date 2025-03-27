document.querySelector("#form").addEventListener('keyup',(e) =>{
    console.log(e)

    if(e.target.dataset.uppercase != undefined){
        e.target.value= e.target.value.toUpperCase()
    }
        
})

//Pros and cons of Event Deligation
//1-> Memory- We uses single event handler
//2-> Less- we just attached event handler to parent, other wise we need to all

//Limitations 
//There are many event which doest not bublled up.
//We cant stop propagation of bubble, otherwise it wont work
