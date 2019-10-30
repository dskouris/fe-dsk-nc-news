import React, { Component } from 'react';
import * as api from '../utils/api';
import CommentsList from './CommentsList';
import ErrorPage from './ErrorPage';

class SingleArticle extends Component {
  state = { article: {}, showComments: false, err: null };

  toggleComments = () => {
    this.setState(currentState => {
      return { ...currentState, showComments: !currentState.showComments };
    });
  };
  render() {
    return (
      <>
        <h1>{this.state.article.title}</h1>
        {this.state.err ? (
          <ErrorPage err={this.state.err} />
        ) : (
          <>
            <p>{this.state.article.body}</p>
            <button onClick={this.toggleComments}>
              {this.state.showComments ? 'Hide comments' : 'Show comments'}
            </button>
            {this.state.showComments && (
              <CommentsList article_id={this.props.article_id} />
            )}
          </>
        )}
      </>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, err: null });
      })
      .catch(err => {
        let errObj = {
          status: err.response.status,
          msg: err.response.data.msg
        };
        this.setState(currentState => {
          return { ...currentState, err: errObj };
        });
      });
  }
}

export default SingleArticle;
