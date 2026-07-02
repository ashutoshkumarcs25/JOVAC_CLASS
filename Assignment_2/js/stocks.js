// const API_KEY = "YI5DANYA312QUKWK";

async function searchStock() {

    const symbol = document
        .getElementById("searchInput")
        .value
        .trim()
        .toUpperCase();

    if (!symbol) {
        alert("Enter Stock Symbol");
        return;
    }

    const stockData =
        document.getElementById("stockData");

    stockData.innerHTML =
        "<p>Loading...</p>";

    try {

        const response = await fetch(
            `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
        );

        const data = await response.json();

        const quote =
            data["Global Quote"];

        if (!quote ||
            Object.keys(quote).length === 0) {

            stockData.innerHTML =
                "<p>Stock not found!</p>";

            return;
        }
details.innerHTML = `
    <div class="stock-card">

        <h2>${quote["01. symbol"]}</h2>

        <p><strong>Price:</strong>
        $${quote["05. price"]}</p>

        <p><strong>Open:</strong>
        $${quote["02. open"]}</p>

        <p><strong>High:</strong>
        $${quote["03. high"]}</p>

        <p><strong>Low:</strong>
        $${quote["04. low"]}</p>

        <p><strong>Volume:</strong>
        ${quote["06. volume"]}</p>

    </div>
`;

document.getElementById("stockDetails")
.scrollIntoView({
    behavior: "smooth"
});
    } catch (error) {

        console.error(error);

        stockData.innerHTML =
            "<p>Failed to load stock data.</p>";
    }
}
const details =
document.getElementById(
    "stockDetailsContent"
);

details.innerHTML = `
    <div class="stock-card">

        <h2>${quote["01. symbol"]}</h2>

        <p><strong>Price:</strong>
        $${quote["05. price"]}</p>

        <p><strong>Open:</strong>
        $${quote["02. open"]}</p>

        <p><strong>High:</strong>
        $${quote["03. high"]}</p>

        <p><strong>Low:</strong>
        $${quote["04. low"]}</p>

        <p><strong>Volume:</strong>
        ${quote["06. volume"]}</p>

        <button onclick="addToWatchlist('${quote["01. symbol"]}')">
            ⭐ Add To Watchlist
        </button>

    </div>
`;