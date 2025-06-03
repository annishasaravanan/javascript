const cart = ['shoes', 'pants', 'shirt'];

function creatOrder(cart) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (cart.length > 0) {
                resolve('order created');
            } else {
                reject('order not created');
            }
        }, 2000);
    });
}

function proceedToPayment(orderId) {
    console.log(orderId);
    return Promise.resolve('payment successful ');
}

function showOrdrSummary(paymentInfo) {
    console.log(paymentInfo);
    return Promise.resolve('summary shown');
}

function updateWlletBalance(paymentInfo) {
    console.log('wallet updated');
}

creatOrder(cart)
    .then((orderId) => proceedToPayment(orderId))
    .then((paymentInfo) => showOrdrSummary(paymentInfo))
    .then((paymentInfo) => updateWlletBalance(paymentInfo))
    .catch((err) => console.error(err));
