// const NEWS_API_KEY = "8e94faea49404be5a92148095f0e7e01";

async function loadNews() {

    const container =
        document.getElementById("newsContainer");

    try {

        container.innerHTML = "<p>Loading News...</p>";

        const response = await fetch(
            `https://newsapi.org/v2/everything?q=stock%20market&sortBy=publishedAt&pageSize=6&apiKey=${NEWS_API_KEY}`
        );

        const data = await response.json();

        if (!data.articles || data.articles.length === 0) {
            container.innerHTML =
                "<p>No news found.</p>";
            return;
        }

       container.innerHTML =
data.articles.map(article => `
    <div class="news-card">

        <img
            src="${article.urlToImage || 'https://via.placeholder.com/300'}"
            alt="news"
        >

        <div class="news-content">

            <span class="source">
                ${article.source.name}
            </span>

            <h3>${article.title}</h3>

            <p>
                ${article.description || ''}
            </p>

            <small>
                ${new Date(article.publishedAt)
                .toLocaleDateString()}
            </small>

            <br><br>

            <a href="${article.url}" target="_blank">
                Read More →
            </a>

        </div>

    </div>
`).join("");

    } catch (error) {

        console.error(error);

        container.innerHTML =
            "<p>Failed to load news.</p>";
    }
}

loadNews();