
function getData(data){
   return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random() *10);
    if(internetSpeed>4){
        resolve("success : data was saved");
        console.log(data);
    }
    else{
        reject("failure :error");
    }
   })
}
getData("shubham").then((res)=>{
    console.log(res);
    return getData("pavan")
}).then((res2)=>{
    console.log(res2);
})

.catch((err)=>{
    console.log(err);
})