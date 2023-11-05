import React, { useState } from 'react';

function App() {
  const [category, setCategory] = useState('general');
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = async () => {
    setLoading(true);

    try {
      const response = await fetch(
        `https://gnews.io/api/v4/top-headlines?category=${category}&apikey=[API_KEY]&max=10&lang=en`
      );
      const data = await response.json();
      setNews(data.articles);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    fetchNews();
  };

  return (
    <div>
      <h1 className="heading">Top 10 {category} news</h1>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('general')}>General</button>
        <button onClick={() => handleCategoryChange('sports')}>Sports</button>
        <button onClick={() => handleCategoryChange('technology')}>Technology</button>
      </div>
      {loading ? (
        <p className="loader">Loading...</p>
      ) : (
        <ul>
          {news.map((article, index) => (
            <li key={index}>
              <img src={article.image} alt={article.title} />
              <h2>{article.title}</h2>
              <p>{article.description}</p>
              <p>Source: {article.source.name}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
