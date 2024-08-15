import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
function News(props) {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pagesize, setPagesize] = useState(props.pagesize);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(true)
  document.title = `${(props.category).toUpperCase()}-NewsMonkey`

  const apiKey = 'cd95e246c8154c55ace4be1a71bcecd7';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page}&pageSize=${pagesize}`;
        const result = await fetch(url);
        if (!result.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await result.json();
        setLoading(false)
        setArticles(data.articles); // Set the articles in state
        setTotalResults(data.totalResults)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [page]);
  const handlePrev = () => {
    setLoading(true)
    setPage(page - 1)

  }
  const handleNext = () => {
    setLoading(true)
    setPage(page + 1)

  }
  return (
    <>
      <h2 className='text-center mt-3'>🌐News- Top Headlines from {(props.category).toUpperCase()} </h2>
      {loading && <Spinner />}
      <div className="d-flex justify-content-center flex-wrap mt-3">
        {articles.map((article, index) => (
          <div key={index} className="card m-2" style={{ width: '18rem' }}>
            <img
              src={
                article.urlToImage
                  ? article.urlToImage
                  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_xa40sI-ymDTAm4j5igV3uiFm60KjcQ9YA&s'
              }
              className="card-img-top"
              alt={article.title || 'News Image'}
            />
            <div className="card-body">
              <h5 className="card-title">{article.title} <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: 1 }}>
                {article.source.name}
              </span></h5>
              <p className="card-text">{article.description}</p>
              <p className="card-text"><small className='text-muted'>By {article.author ? article.author : "Unknown"} on {new Date(article.publishedAt).toGMTString()}</small></p>
              <a href={article.url} className="btn btn-primary">
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-around">
        <button disabled={page <= 1} onClick={handlePrev} type="button" className="btn btn-dark">&larr; Prev</button>
        <button disabled={articles.length == 0 || page + 1 > Math.ceil(totalResults / 2)} onClick={handleNext} type="button" className="btn btn-dark">Next &rarr;</button>
      </div>
    </>
  );
}

export default News;
