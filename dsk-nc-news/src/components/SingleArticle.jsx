import React, { Component } from 'react';
import * as api from '../utils/api';

class SingleArticle extends Component {
  state = { article: {} };
  render() {
    return (
      <>
        <h1>{this.state.article.title}</h1>
        <p>{this.state.article.body}</p>
      </>
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
