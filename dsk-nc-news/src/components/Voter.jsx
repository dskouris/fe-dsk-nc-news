import React, { Component } from 'react';
import * as api from '../utils/api';

class Voter extends Component {
  state = { additionalVotes: 0 };
  vote = event => {
    console.log(this.props);
    const { article_id, comment_id } = this.props;
    let { additionalVotes } = this.state;
    if (additionalVotes === 0) {
      if (article_id) {
        this.setState({
          additionalVotes: event.target.id === 'upvote' ? 1 : -1
        });
        api
          .updateArticleVotes(article_id, event.target.id === 'upvote' ? 1 : -1)
          .catch(console.log);
      } else {
        this.setState({
          additionalVotes: event.target.id === 'upvote' ? 1 : -1
        });
        api
          .updateCommentVotes(comment_id, event.target.id === 'upvote' ? 1 : -1)
          .catch(console.log);
      }
    }
  };

  render() {
    const { currentVotes } = this.props;
    let { additionalVotes } = this.state;
    return (
      <>
        <p>Votes: {currentVotes + additionalVotes}</p>
        {additionalVotes === 0 ? (
          <>
            <button
              onClick={this.vote}
              id='upvote'
              disabled={additionalVotes === 1 ? true : false}
            >
              Upvote
            </button>
            <button
              onClick={this.vote}
              id='downvote'
              disabled={additionalVotes === -1 ? true : false}
            >
              Downvote
            </button>{' '}
          </>
        ) : (
          <p>You {additionalVotes === 1 ? 'upvoted' : 'downvoted'} this</p>
        )}
      </>
    );
  }
}

export default Voter;
