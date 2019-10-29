import React, { Component } from 'react';
import ArticleCard from './ArticleCard';
import Loading from './Loading';
import * as api from '../utils/api';
import * as utils from '../utils/utils';

class ArticlesList extends Component {
  _isMounted = false;

  state = {
    articles: [],
    sort: null,
    isLoading: true
  };

  handleChange = event => {
    const sort = event.target.value;
    this.setState(currentState => {
      return { ...currentState, sort };
    });
  };

  render() {
    return (
      <div id='articles-list'>
        <h2>Articles</h2>
        <p>
          Viewing articles about:{' '}
          {this.props.topic ? utils.capitalise(this.props.topic) : 'Everything'}
        </p>
        <label>
          Sort by:
          <select onChange={this.handleChange} defaultValue='created_at'>
            <option value='created_at'>Most recent</option>
            <option value='comment_count'>Comment count</option>
            <option value='votes'>Votes</option>
          </select>
        </label>
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
    const { sort } = this.state;
    api.getArticles(topic, sort).then(articles => {
      if (this._isMounted) {
        this.setState({ articles, isLoading: false });
      }
    });
  }
  componentDidUpdate(prevProps, prevState) {
    this._isMounted = true;
    const { topic } = this.props;
    const { sort } = this.state;
    if (topic !== prevProps.topic || sort !== prevState.sort) {
      api.getArticles(topic, sort).then(articles => {
        if (this._isMounted) {
          this.setState({ articles, isLoading: false });
        }
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default ArticlesList;
