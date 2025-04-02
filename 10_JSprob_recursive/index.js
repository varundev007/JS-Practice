let user= {
    name: "Varun",
    address: {
        personal:{
            city: "blr",
            area: "sarjapur"
        },
        office:{
            city: "hyd",
            area: {
                landmark:"marthalli"
            }
        }
    }
}
/*
Dessire output
  let final obj = {
        user_name= "Varun",
        user_address_personal_city= "blr"
        user_address_personal_area= "sarjapur"
        user_address_office_city="hyd"
        user_address_office_landmark= "marathalli"
  }
*/
let findObj={}
let magic= (obj, parent)=>{

    for(let key in obj){
        if(typeof obj[key] === "object"){
            magic(obj[key], parent+"_"+key)
        }
        else{
            findObj[parent+"_"+key]=obj[key]
        }
    }
}
magic(user, "user")
console.log(findObj)