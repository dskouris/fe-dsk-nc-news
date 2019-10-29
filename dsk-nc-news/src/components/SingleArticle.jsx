import React, { Component } from 'react';
import * as api from '../utils/api';
import Topics from './Topics';
import CommentsList from './CommentsList';

class SingleArticle extends Component {
  state = { article: {} };
  render() {
    return (
      <div className='articles-container'>
        <Topics />
        <div>
          <h1>{this.state.article.title}</h1>
          <p>{this.state.article.body}</p>
          <CommentsList article_id={this.props.article_id} />
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api.getSingleArticle(article_id).then(article => {
      this.setState({ article });
    });
  }
}

export default SingleArticle;
