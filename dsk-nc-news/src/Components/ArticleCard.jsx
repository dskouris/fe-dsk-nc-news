import React from 'react';

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card'>
      <h3>{article.title}</h3>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count} </p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleCard;
