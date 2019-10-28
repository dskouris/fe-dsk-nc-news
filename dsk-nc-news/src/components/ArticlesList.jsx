import React, { Component } from 'react';
import Topics from './Topics';
import ArticleCard from './ArticleCard';
import * as api from '../utils/api';

class ArticlesList extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div id='articles-container'>
        <Topics />
        <div id='articles-list'>
          <h2>Articles</h2>
          <ul>
            {this.state.articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </ul>
        </div>
      </div>
    );
  }
  componentDidMount() {
    api.getArticles().then(articles => {
      this.setState({ articles });
    });
  }
}

export default ArticlesList;
