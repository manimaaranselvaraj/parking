/***********we can have all application endpoints here */

const domainUrl = 'https://careduraonlinestore.com';
const serverPort = 4002;

// const paymentSuccessRedirectUrl = `http://localhost:4200/orderloading/success`;
// const paymentFailureRedirectUrl = `http://localhost:4200/orderloading/failure`;


const paymentSuccessRedirectUrl = `${domainUrl}/demo/web/orderloading/success`;
const paymentFailureRedirectUrl = `${domainUrl}/demo/web/orderloading/failure`;

const paypalPaymentSuccessCallbackUrl = `${domainUrl}:${serverPort}/payment/paypal/success`;
const paypalPaymentFailureCallbackUrl = `${domainUrl}:${serverPort}/payment/paypal/cancel`;

const paytmPaymentSuccessCallbackUrl = `${domainUrl}:${serverPort}/payment/paytm/callback`;
const paytmTransactionUrl = 'https://securegw.paytm.in/order/process';

module.exports = {
    domainUrl: domainUrl,
    serverPort: serverPort,
    paymentSuccessRedirectUrl: paymentSuccessRedirectUrl,
    paymentFailureRedirectUrl: paymentFailureRedirectUrl,
    paypalPaymentSuccessCallbackUrl: paypalPaymentSuccessCallbackUrl,
    paypalPaymentFailureCallbackUrl: paypalPaymentFailureCallbackUrl,
    paytmPaymentSuccessCallbackUrl: paytmPaymentSuccessCallbackUrl,
    paytmTransactionUrl: paytmTransactionUrl
};