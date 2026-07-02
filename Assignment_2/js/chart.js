async function loadChart() {
    try {
        const response = await fetch(
            "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=7"
        );

        const data = await response.json();

        const labels = data.prices.map(item => {
            const date = new Date(item[0]);
            return date.toLocaleDateString();
        });

        const prices = data.prices.map(item => item[1]);

        const ctx = document
            .getElementById("marketChart")
            .getContext("2d");

        new Chart(ctx, {
            type: "line",

            data: {
                labels: labels,

                datasets: [
                    {
                        data: prices,
                        borderColor: "#38bdf8",
                        backgroundColor: "rgba(56,189,248,0.15)",
                        borderWidth: 3,
                        pointRadius: 2,
                        pointHoverRadius: 6,
                        fill: true,
                        tension: 0.4
                    }
                ]
            },

            options: {
                responsive: true,

                plugins: {
                    legend: {
                        display: false
                    }
                },

                scales: {
                    x: {
                        ticks: {
                            color: "white"
                        },
                        grid: {
                            color: "rgba(255,255,255,0.1)"
                        }
                    },

                    y: {
                        ticks: {
                            color: "white"
                        },
                        grid: {
                            color: "rgba(255,255,255,0.1)"
                        }
                    }
                }
            }
        });

    } catch (error) {
        console.error("Chart Error:", error);
    }
}

loadChart();