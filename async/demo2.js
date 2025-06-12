function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 10000); // 10 seconds
    });
}

function fetchData1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched 1");
        }, 5000); // 5 seconds
    });
}

async function getData() {
    console.log("hello world");

    // Start both promises at the same time
    const promise1 = fetchData();
    const promise2 = fetchData1();

    // Wait for both to complete
    const [data, data1] = await Promise.all([promise1, promise2]);

    console.log("annisha");
    console.log(data);   // "Data fetched"
    console.log("javascript");
    console.log(data1);  // "Data fetched 1"
}

getData();
