import { NewsArticle } from "../../elements/news-article/NewsArticle";
import json from "../../../data/news.json";

export function News() {
  const news: Array<{
    id: string;
    author: string;
    date: {
      time: string;
      dayOfMonth: string;
      month: string;
      dayOfWeek: string;
      year: string;
    };
    subject: string;
    content: string;
    sentBy: {
      name: string;
      time: string;
    };
  }> = json.news_articles;

  return (
    <main>
      {news.map((article_data) => {
        return <NewsArticle article={article_data} key={article_data.id} />;
      })}
    </main>
  );
}
