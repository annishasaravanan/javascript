// const cart=["shirt","pants","shoes"];

// createOrder(cart,function(orderId){
//     proceedToPayment(orderId);
// });
//passing the callback function to another function

// const promise=createOrder(cart);

// promise.then(function(orderId){
//  proceedToPayment(orderId);
// });

const GITHUB_API="https://api.github.com/annishasaravanan/js";

const user=fetch(GITHUB_API);