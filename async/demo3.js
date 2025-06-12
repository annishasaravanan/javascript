
const API_URL="https://api.github.com/users/annishasaravanan";

async function handlePromise(){


try{
    const data=await fetch(API_URL);
    const jsonValue=await data.json();
    console.log(jsonValue);
}
catch(error){
    console.log("error:",error);
}

}
handlePromise().catch((error)=>{
    console.log("error: ",error);
});














//      const data =await fetch(API_URL);

//  const jsonValue=await data.json();


 //fetch()=>Response.json()=>jsonvalue
//  console.log(jsonValue);


//  fetch().then(response=>response.json()).then(respone=>console.log());
     


 //fetch()=> response object it is a body it is a readable steam convert into the json and it will be a .json()=>jsonvalue
