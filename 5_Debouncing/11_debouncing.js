let counter=0
const getData=() =>{
    //calls an api and get data
  console.log("Fetching Data..." ,counter++)  
}

const debounceFetchedRes = debounce(getData,500)

function debounce(getData, delay){
    let timer
    return function(...args){
        clearTimeout(timer)
        timer = setTimeout(()=>getData.apply(this, args), delay)
    }
}