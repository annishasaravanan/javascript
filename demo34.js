const cart = ["laptop", "phone", "tablet"];

// Step 1: Validate user
function validateUser(cart) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (cart.length > 0) {
        console.log("✅ User validated");
        resolve("user123");
      } else {
        reject("❌ Cart is empty, user not valid");
      }
    }, 1000);
  });
}

// Step 2: Add items to cart
function addItemsToCart(userId, cart) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`✅ Items added to cart for user: ${userId}`);
      resolve({ userId, cart });
    }, 1000);
  });
}

// Step 3: Apply discount
function applyDiscount(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("✅ Discount applied: 10%");
      order.discount = 10;
      resolve(order);
    }, 1000);
  });
}

// Step 4: Process payment
function processPayment(order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (order.discount) {
        console.log("💰 Payment processed");
        order.paymentStatus = "Success";
        resolve(order);
      } else {
        reject("❌ Payment failed due to no discount");
      }
    }, 1000);
  });
}

// Step 5: Show confirmation
function showConfirmation(order) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`🎉 Order confirmed for ${order.userId}`);
      console.log(`📦 Items: ${order.cart.join(", ")}`);
      console.log(`✅ Payment Status: ${order.paymentStatus}`);
      resolve("🎊 All steps completed successfully!");
    }, 1000);
  });
}

// 🧩 Chain each step with its own `.catch()`
validateUser(cart)
  .then((userId) => {
    return addItemsToCart(userId, cart).catch((error) => {
      console.error(" Error in Add to Cart:", error);
      throw error;
    });
  })
  .then((order) => {
    return applyDiscount(order).catch((error) => {
      console.error(" Error in Apply Discount:", error);
      throw error;
    });
  })
  .then((order) => {
    return processPayment(order).catch((error) => {
      console.error(" Error in Process Payment:", error);
      throw error;
    });
  })
  .then((order) => {
    return showConfirmation(order).catch((error) => {
      console.error("⚠️ Error in Show Confirmation:", error);
      throw error;
    });
  })
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error("❌ Final Catch:", error);
  });
