import React, {useState, useEffect} from "react";
import axios from "axios";
import '../../assets/styles.css';


function News() {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    function getNews() {
      try {
        axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=5de2c3eaa73347519de51fddb972b631")
          .then((response) => {
            // Extract the first 10 articles from the response data
            console.log(response);
            const articles = response.data.articles.slice(0, 10);
            // Create an array of news items from the articles
            const newsItems = articles.map(article => ({
              image: article.urlToImage,
              title: article.title,
              content: article.description,
              url: article.url
            }));
            // Update allNews state with the array of news items
            setAllNews(newsItems);
          });
      } catch (error) {
        console.log(error);
      }
    }

    getNews();
  }, []);

  useEffect(() => {
    console.log(allNews);
  }, [allNews]);

  return (
    <div>
      <h3 class="makeStyles-title-99 Typography-h3">News</h3>
      <div className="parent" style={{color: "black"}}>
      {allNews.map((newsItem, index) => (
        <div key={index} className="note">
          <div className="image">
            <img src={newsItem.image} alt="" style={{width: "100%", borderTopLeftRadius: "10px", borderTopRightRadius: "10px"}}/>
          </div>
          <div className="title">
            {newsItem.title}
          </div>
          <div className="content">
            {newsItem.content}
          </div>
          <div className="link">
            <button><a href={newsItem.url}>Read More</a></button>
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}

export default News;
