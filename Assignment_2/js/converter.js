async function convertCurrency() {

    const amount =
        document.getElementById("amount").value;

    const from =
        document.getElementById("fromCurrency").value;

    const to =
        document.getElementById("toCurrency").value;

    const result =
        document.getElementById("conversionResult");

    if (!amount) {
        result.innerHTML =
            "Enter amount";
        return;
    }

    try {

        const response = await fetch(
            `https://api.exchangerate-api.com/v4/latest/${from}`
        );

        const data = await response.json();

        const rate = data.rates[to];

        const converted =
            (amount * rate).toFixed(2);

        result.innerHTML = `
            ${amount} ${from}
            =
            <strong>
                ${converted} ${to}
            </strong>
        `;

    } catch (error) {

        console.error(error);

        result.innerHTML =
            "Conversion Failed";
    }
}