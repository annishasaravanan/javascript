function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 20000);
    });
}

function fetchdata1() {
    return new Promise ((resolve)=>{
        setTimeout(()=>{
            resolve("Data fetched 1");
    }, 5000);
});
}

async function getData() {
    //js engine for promise to resolve 
    console.log("hello world");
        const data = await fetchData();
        console.log("annisha");
        console.log(data);
        const data1=await fetchdata1();
        console.log("javascript");
        console.log(data1);
    
}
getData();