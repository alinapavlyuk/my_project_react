import "./newsArticle.scss";
import { Polygon } from "./polygon/Polygon";

type NewsArticle = {
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
};

type NewsArticleProps = {
  article: NewsArticle;
};

export function NewsArticle({ article }: NewsArticleProps) {
  return (
    <div className="article-container">
      <Polygon direction="up" />
      <p className="article">
        -{article.author} {article.date.time}, {article.date.dayOfWeek},{" "}
        {article.date.dayOfMonth} {article.date.month}, {article.date.year}.
        message {article.id}
        <br />
        <br />[
        {article.subject === "" ? "subject of the message" : article.subject}
        ]:
        <br />
        <br />
        {article.content}
        <br />
        <br />
        [the end of the message. closed conversation. message has been sent by
        agent {article.sentBy.name}. {article.sentBy.time}.]
      </p>
      <Polygon direction="down" />
    </div>
  );
}
