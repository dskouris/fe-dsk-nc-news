import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';
import * as api from '../utils/api';

class ArticlesList extends Component {
  _isMounted = false;

  state = {
    articles: [],
    isLoading: true
  };

  render() {
    return (
      <div id='articles-list'>
        <h2>Articles</h2>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <ul>
            {this.state.articles.map(article => {
              return <ArticleCard article={article} key={article.article_id} />;
            })}
          </ul>
        )}
      </div>
    );
  }
  componentDidMount() {
    this._isMounted = true;
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      if (this._isMounted) {
        this.setState({ articles, isLoading: false });
      }
    });
  }
  componentDidUpdate() {
    this._isMounted = true;
    const { topic } = this.props;
    api.getArticles(topic).then(articles => {
      if (this._isMounted) {
        this.setState({ articles, isLoading: false });
      }
    });
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default ArticlesList;
