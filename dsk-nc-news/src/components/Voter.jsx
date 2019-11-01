import React, { Component } from 'react';
import * as api from '../utils/api';
import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  color: #ba2032;
  font-size: 20px;
  font-weight: bold;
  border: none;
  outline: inherit;
  padding: 5px;
  margin: 5px;
  transition: all 500ms ease;
  &:hover {
    transform: scale(1.3);
  }
`;

class Voter extends Component {
  state = { additionalVotes: 0 };
  vote = event => {
    const target = event.target.id;
    const { article_id, comment_id } = this.props;
    let { additionalVotes } = this.state;
    if ([-1, 0, 1].includes(additionalVotes)) {
      if (article_id) {
        this.setState(currentState => {
          return {
            additionalVotes:
              target === 'upvote'
                ? currentState.additionalVotes + 1
                : currentState.additionalVotes - 1
          };
        });
        api
          .updateArticleVotes(article_id, event.target.id === 'upvote' ? 1 : -1)
          .catch(console.log);
      } else {
        this.setState(currentState => {
          return {
            additionalVotes:
              target === 'upvote'
                ? currentState.additionalVotes + 1
                : currentState.additionalVotes - 1
          };
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
      <div id='vote-box'>
        <Button
          onClick={this.vote}
          id='upvote'
          disabled={additionalVotes === 1 ? true : false}
        >
          ▲
        </Button>
        <p>Votes: {currentVotes + additionalVotes}</p>
        <Button
          onClick={this.vote}
          id='downvote'
          disabled={additionalVotes === -1 ? true : false}
        >
          ▼
        </Button>{' '}
      </div>
    );
  }
}

export default Voter;
