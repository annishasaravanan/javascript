function placeOrder(foodItem) {
  return new Promise((resolve, reject) => {
    console.log(`Ordering ${foodItem}...`);

    setTimeout(() => {
      if (foodItem) {
        resolve(`${foodItem} is ready!`);
      } else {
        reject("❌ No food item specified.");
      }
    }, 2000); // simulates 2-second cooking time
  });
}

placeOrder("Pizza")
  .then((message) => {
    console.log("✅ Success:", message);
  })
  .catch((error) => {
    console.log("⚠️ Error:", error);
  });
