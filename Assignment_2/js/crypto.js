// CoinGecko API
const CRYPTO_API =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana,dogecoin&vs_currencies=usd&include_24hr_change=true";

async function loadCryptoPrices() {
  try {
    const response = await fetch(CRYPTO_API);
    const data = await response.json();

    document.getElementById("btcPrice").innerHTML = `
      $${data.bitcoin.usd.toLocaleString()}
      <br>
      <small>${data.bitcoin.usd_24h_change.toFixed(2)}%</small>
    `;

    document.getElementById("ethPrice").innerHTML = `
      $${data.ethereum.usd.toLocaleString()}
      <br>
      <small>${data.ethereum.usd_24h_change.toFixed(2)}%</small>
    `;

    document.getElementById("solPrice").innerHTML = `
      $${data.solana.usd.toLocaleString()}
      <br>
      <small>${data.solana.usd_24h_change.toFixed(2)}%</small>
    `;

    document.getElementById("dogePrice").innerHTML = `
      $${data.dogecoin.usd.toLocaleString()}
      <br>
      <small>${data.dogecoin.usd_24h_change.toFixed(2)}%</small>
    `;

  } catch (error) {
    console.error("Crypto Error:", error);

    document.getElementById("btcPrice").innerText = "Error";
    document.getElementById("ethPrice").innerText = "Error";
    document.getElementById("solPrice").innerText = "Error";
    document.getElementById("dogePrice").innerText = "Error";
  }
}

// Load immediately
loadCryptoPrices();

// Auto refresh every 60 seconds
setInterval(loadCryptoPrices, 60000);