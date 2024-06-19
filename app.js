document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'cec5d336592a4a6d96cc478d3b3a19e2'; // Replace with your NewsAPI key
    const topic = 'Trump'; // Topic of interest
    const url = `https://newsapi.org/v2/everything?q=${topic}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const newsContainer = document.getElementById('news-container');

            articles.forEach(article => {
                const articleElement = document.createElement('div');
                articleElement.classList.add('news-article');

                const title = document.createElement('h2');
                title.classList.add('news-title');
                title.textContent = article.title;

                const description = document.createElement('p');
                description.classList.add('news-description');
                description.textContent = article.description;

                articleElement.appendChild(title);
                articleElement.appendChild(description);

                newsContainer.appendChild(articleElement);
            });
        })
        .catch(error => {
            console.error('Error fetching news:', error);
        });
});
