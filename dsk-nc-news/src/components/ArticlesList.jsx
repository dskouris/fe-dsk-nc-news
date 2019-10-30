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
    order: null,
    isLoading: true
  };

  handleChange = event => {
    let sortOptions = event.target.value.split('-');

    const sort = sortOptions[0];
    const order = sortOptions[1];
    this.setState(currentState => {
      return { ...currentState, sort, order };
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
          <select
            onChange={this.handleChange}
            defaultValue='created_at-desc'
            id='select-sort'
          >
            <option value='created_at-desc'>Newest</option>
            <option value='created_at-asc'>Oldest</option>
            <option value='comment_count-desc'>Most comments</option>
            <option value='comment_count-asc'>Least comments</option>
            <option value='votes-desc'>Most votes</option>
            <option value='votes-asc'>Least votes</option>
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
    const { sort, order } = this.state;
    api
      .getArticles(topic, sort, order)
      .then(articles => {
        if (this._isMounted) {
          this.setState({ articles, isLoading: false });
        }
      })
      .catch(console.log);
  }
  componentDidUpdate(prevProps, prevState) {
    this._isMounted = true;
    const { topic } = this.props;
    const { sort, order } = this.state;
    if (
      topic !== prevProps.topic ||
      sort !== prevState.sort ||
      order !== prevState.order
    ) {
      api
        .getArticles(topic, sort, order)
        .then(articles => {
          if (this._isMounted) {
            this.setState({ articles, isLoading: false });
          }
        })
        .catch(console.log);
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
}

export default ArticlesList;
