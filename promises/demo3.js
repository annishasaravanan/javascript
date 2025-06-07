const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("p1 success");
    }, 3000);
});

const p2 = new Promise((reject) => {
    setTimeout(() => {
        reject("p2 fails");
    }, 1000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("p3 success");
    }, 2000);
});

Promise.race([p1, p2, p3])
  .then((values) => {
    console.log(values); 
  })
  .catch((error) =>{
    console.error("Error: ",error);
  });
