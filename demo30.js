const cart=["shirt","pants","shoes"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });
//passing the callback function to another function

// const promise=createOrder(cart);

// promise.then(function(orderId){
//  proceedToPayment(orderId);
// });

// const GITHUB_API="https://api.github.com/annishasaravanan/js";

// const user =fetch(GITHUB_API);
// console.log(user);

// user.then (function(response){
//     console.log(data);
// })


function addToCart(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (item) {
        resolve(`${item} added to cart`);
      } else {
        reject("No item specified");
      }
    }, 2000);
  });
}

addToCart("Shoes")
  .then((message) => {
    console.log("✅ Success:", message);
  })
  .catch((error) => {
    console.log("❌ Error:", error);
  });
