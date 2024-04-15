function convertCurrency() {
    let amount = parseFloat(document.getElementById('amount').value);
    let currency = document.getElementById('currency').value;
    
    // Supongamos que estas tasas de cambio son ficticias para propósitos de demostración
    let exchangeRates = {
        EU_to_COP: 4000,
        USD_to_COP: 3500,
        BR_to_COP: 700
    };

    let exchangeRate;
    if (currency === 'EU') {
        exchangeRate = exchangeRates.EU_to_COP;
    } else if (currency === 'USD') {
        exchangeRate = exchangeRates.USD_to_COP;
    } else if (currency === 'BR') {
        exchangeRate = exchangeRates.BR_to_COP;
    }

    let result = amount * exchangeRate;
    document.getElementById('result').innerHTML = `Resultado: ${result.toFixed(2)} COP`;
}