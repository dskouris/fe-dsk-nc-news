import React from 'react';
import { Link } from '@reach/router';
import * as utils from '../utils/utils';

const ArticleCard = ({ article }) => {
  return (
    <div className='article-card'>
      <Link to={`/articles/${article.article_id}`} article={article}>
        <h3>{article.title}</h3>
      </Link>
      <p>By {article.author}</p>
      <p>Created at: {utils.formatTimestamp(article.created_at)}</p>
      <p>Topic: {article.topic}</p>
      <p>Comments: {article.comment_count} </p>
      <p>Votes: {article.votes}</p>
    </div>
  );
};

export default ArticleCard;
