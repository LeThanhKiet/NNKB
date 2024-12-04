const paypal = require("paypal-rest-sdk");

paypal.configure({
    mode: "sandbox",
    client_id: "ARsUMjl_10PY_iqW8opQ7T7t_jdbhdDfniSwg7T9fEh5SPMvZZHs0yQ3uczpyuq1WFNLGjMVMP4oOksZ",
    client_secret: "EGNTc77v0hE2yuJrZTkzbVsydCxCZPUgI9WS31-7_SKB8HzJro66rOEzwN3sISN0qEtC1vQWQ47oBP5x",
});

module.exports = paypal;
