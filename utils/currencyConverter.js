const conversionRates = {
    EUR: 0.85,
    GBP: 0.75
  };
  
  const convertCurrency = (totalPrice, currency) => {
    return totalPrice * conversionRates[currency];
  };
  
  module.exports = { convertCurrency };
  