const defaultWatchlist = [
    "BTC",
    "ETH",
    "SOL",
    "DOGE",
    "AAPL",
    "TSLA"
];

function getWatchlist() {
    let list = JSON.parse(
        localStorage.getItem("watchlist")
    );

    if (!list || list.length === 0) {
        localStorage.setItem(
            "watchlist",
            JSON.stringify(defaultWatchlist)
        );

        return defaultWatchlist;
    }

    return list;
}

function saveWatchlist(list) {
    localStorage.setItem(
        "watchlist",
        JSON.stringify(list)
    );
}

function addToWatchlist(symbol) {

    let list = getWatchlist();

    if (!list.includes(symbol)) {

        list.push(symbol);

        saveWatchlist(list);

        renderWatchlist();
    }
}

function removeFromWatchlist(symbol) {

    let list = getWatchlist();

    list = list.filter(
        item => item !== symbol
    );

    saveWatchlist(list);

    renderWatchlist();
}

function renderWatchlist() {

    const watchlist =
        document.getElementById("watchlist");

    const list = getWatchlist();

    if (list.length === 0) {
        watchlist.innerHTML =
            "<li>No items in watchlist</li>";
        return;
    }

    watchlist.innerHTML = list
        .map(symbol => `
            <li>
                <span>${symbol}</span>

                <button onclick="removeFromWatchlist('${symbol}')">
                    ❌
                </button>
            </li>
        `)
        .join("");
}

renderWatchlist();