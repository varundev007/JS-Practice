// function x(){
//     for(let i = 0; i<6; i++){
//         setTimeout(function(){
//             console.log(i)
//         },i*3000)
//     }
//     console.log("JS")
// }
// x()

function x(){
    for(var i = 0; i<6; i++){
        function close(i){
        setTimeout(function(){
            console.log(i)
        },i*3000)
    }
    close(i)
    }
    console.log("JS")
}
x()