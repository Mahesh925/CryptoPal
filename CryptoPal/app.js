
function getExchangeData () {

    const from_currency_data = document.getElementById("from-currency").value;
    const to_currency_data = document.getElementById("to-currency").value;

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'f82c097db2mshdbdc8779f68967cp10acd1jsne7a222dd3cde',
            'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
        }
    };
    var URL = `https://alpha-vantage.p.rapidapi.com/query?from_currency=${from_currency_data}&function=CURRENCY_EXCHANGE_RATE&to_currency=${to_currency_data}`
    fetch(URL, options)
        .then(response => response.json())
        .then(response => displayExchangeData(response))
        .catch(err => console.error(err));
}

function displayExchangeData(response){
    const from_currency_amount_data = document.getElementById("from-currency-amount").value;
    const to_amount = document.getElementById("to-currency-amount");
    const exchange_rate = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];

    const result = eval( from_currency_amount_data * parseFloat(exchange_rate));
    to_amount.value = result;

}

