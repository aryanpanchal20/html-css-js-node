// //1.CALLBACK HELL

// function getUser(a)
// {
//     console.log("2");
// }


// //2.Promises:

// console.log("app start");

//     function getUser(id)
//     {
//         return new Promise((resolve,reject)=>{
//             reject("data not fetched")
            
//         })
//     }

//     getUser(1).then((data)=>{
//         console.log(data);
        
//     }).catch((error)=>{
//         console.log(error);
        
//     })

async function getData() {
    try{
        const data=await getUser(1);
        console.log("data fetch");
        
    }catch(err)
    {
        console.log(err);
        
    }
}

getData()
console.log("app running");
