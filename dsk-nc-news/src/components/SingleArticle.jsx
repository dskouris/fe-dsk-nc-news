import React, { Component } from 'react';
import * as api from '../utils/api';
import * as utils from '../utils/utils';
import CommentsList from './CommentsList';
import ErrorPage from './ErrorPage';
import Voter from './Voter';
import Loading from './Loading';
import Topics from './Topics';

class SingleArticle extends Component {
  state = { article: {}, showComments: false, err: null, isLoading: true };

  toggleComments = () => {
    this.setState(currentState => {
      return { ...currentState, showComments: !currentState.showComments };
    });
  };

  render() {
    return (
      <div className='articles-container'>
        <Topics />
        <div className='scrollable'>
          <h1>{this.state.article.title}</h1>
          {this.state.err ? (
            <ErrorPage err={this.state.err} />
          ) : this.state.isLoading ? (
            <Loading />
          ) : (
            <>
              <p>Written by: {this.state.article.author}</p>
              <p>{utils.formatTimestamp(this.state.article.created_at)}</p>
              <p className='article-text'>{this.state.article.body}</p>
              <hr />
              <Voter
                article_id={this.props.article_id}
                currentVotes={this.state.article.votes}
              />
              <hr />
              <button onClick={this.toggleComments}>
                {this.state.showComments ? 'Hide comments' : 'Show comments'}
              </button>
              {this.state.showComments && (
                <CommentsList article_id={this.props.article_id} />
              )}
            </>
          )}
        </div>
      </div>
    );
  }
  componentDidMount() {
    const { article_id } = this.props;
    api
      .getSingleArticle(article_id)
      .then(article => {
        this.setState({ article, err: null, isLoading: false });
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
