const cart=['laptop','phone','tablet']

// Validate the user

// Add items to cart

// Apply discount

// Process payment

// Show confirmation

function validateuser(userId)
{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(cart.length<0)
            {
                reject('user not valid');
            }
            console.log('user validate');
            resolve(userId);
        },2000);
    });
}
function addItemsToCart(userId, cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart.length === 0) {
        reject("Cart is empty");
      } else {
        console.log("🛒 Items added to cart");
        resolve({ userId, cart });
      }
    }, 2000);
  });
}

function applyDiscount(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.cart.length === 0) {
        reject("Cart is empty");
      } else {
        console.log("💸 Discount applied");
        data.discountApplied = true;
        resolve(data);
      }
    }, 2000);
  });
}


function processPayment(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (data.discountApplied) {
        console.log("💳 Payment processed");
        data.orderId = "ORD12345";
        resolve(data);
      } else {
        reject("❌ Payment failed: Discount not applied");
      }
    }, 2000);
  });
}

function Showconfirmation(orderDetails)
{
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🎉 Order confirmed! Order ID: ${orderDetails.orderId}`);
      console.log(`📦 Item: ${orderDetails.item}`);
      console.log(`👤 User: ${orderDetails.userId}`);
      resolve("✅ Confirmation shown");
    }, 1000);
});
}

validateuser("user123")
  .then((userId) => addItemsToCart(userId, "Laptop"))
  .then((cart) => applyDiscount(cart))
  .then((discountedCart) => processPayment(discountedCart))
  .then((orderDetails) => Showconfirmation(orderDetails))
  .then((finalMessage) => console.log(finalMessage))
  .catch((error) => console.error("⚠️ Error:", error));