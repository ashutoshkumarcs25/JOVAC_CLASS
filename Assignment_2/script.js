// =========================
// DARK MODE
// =========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            themeBtn.textContent = "☀️";
        } else {
            themeBtn.textContent = "🌙";
        }
    });
}

// =========================
// MARKET STATUS
// =========================

async function loadMarketStatus() {

    const marketStatus =
        document.getElementById("marketStatus");

    const marketCap =
        document.getElementById("marketCap");

    const marketVolume =
        document.getElementById("marketVolume");

    const btcDominance =
        document.getElementById("btcDominance");

    if (marketStatus)
        marketStatus.innerHTML = "🟢 Active";

    if (marketCap)
        marketCap.innerHTML = "Loading...";

    if (marketVolume)
        marketVolume.innerHTML = "Loading...";

    if (btcDominance)
        btcDominance.innerHTML = "Loading...";

    try {

        const response = await fetch(
            "https://api.coingecko.com/api/v3/global"
        );

        const data = await response.json();

        const cap =
            (data.data.total_market_cap.usd / 1e12)
            .toFixed(2);

        const volume =
            (data.data.total_volume.usd / 1e9)
            .toFixed(2);

        const dominance =
            data.data.market_cap_percentage.btc
            .toFixed(2);

        if (marketCap)
            marketCap.innerHTML = `$${cap}T`;

        if (marketVolume)
            marketVolume.innerHTML = `$${volume}B`;

        if (btcDominance)
            btcDominance.innerHTML = `${dominance}%`;

    } catch (error) {

        console.error(
            "Market Status Error:",
            error
        );

    }
}

loadMarketStatus();

setInterval(
    loadMarketStatus,
    60000
);

// =========================
// LIVE CLOCK
// =========================

function updateClock() {

    const clock =
        document.getElementById("lastUpdated");

    if (clock) {

        clock.innerHTML =
            new Date().toLocaleTimeString();
    }
}

updateClock();

setInterval(
    updateClock,
    1000
);

// =========================
// SEARCH SUGGESTIONS
// =========================

const suggestions = [
    "AAPL",
    "TSLA",
    "MSFT",
    "GOOGL",
    "NVDA",
    "AMZN",
    "META"
];

const searchInput =
    document.getElementById("searchInput");

const suggestionBox =
    document.getElementById("suggestions");

if (searchInput && suggestionBox) {

    searchInput.addEventListener(
        "input",
        () => {

            const value =
                searchInput.value
                .toUpperCase()
                .trim();

            if (value === "") {

                suggestionBox.innerHTML = "";
                return;
            }

            const filtered =
                suggestions.filter(stock =>
                    stock.startsWith(value)
                );

            suggestionBox.innerHTML =
                filtered.map(stock => `
                    <div class="suggestion-item"
                         onclick="selectStock('${stock}')">
                        ${stock}
                    </div>
                `).join("");
        }
    );
}

function selectStock(stock) {

    if (searchInput) {
        searchInput.value = stock;
    }

    if (suggestionBox) {
        suggestionBox.innerHTML = "";
    }

    if (typeof searchStock === "function") {
        searchStock();
    }
}

const chatToggle =
document.getElementById("chatToggle");

const chatBox =
document.getElementById("chatBox");

chatToggle.addEventListener("click", () => {

    chatBox.style.display =
        chatBox.style.display === "flex"
        ? "none"
        : "flex";
});