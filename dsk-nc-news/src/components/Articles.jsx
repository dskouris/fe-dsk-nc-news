import React from 'react';
import ArticlesList from './ArticlesList';
import Topics from './Topics';

const Articles = ({ topic }) => {
  return (
    <div className='articles-container'>
      <Topics />
      <ArticlesList topic={topic} />
    </div>
  );
};

export default Articles;
