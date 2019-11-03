import React, { Component } from 'react';
import CommentCard from './CommentCard';
import Loading from './Loading';
import * as api from '../utils/api';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
  cursor: pointer;
  background: #fff;
  color: #ba2032;
  font-size: 16px;
  font-weight: bold;
  border: none;
  outline: inherit;
  padding: 5px;
  transition: all 500ms ease;
  &:hover {
    text-decoration: underline;
  }
`;

class CommentsList extends Component {
  state = {
    newComment: {},
    postedComment: false,
    comments: [],
    isLoading: true
  };

  handleSubmit = event => {
    console.log(this.state.newComment);
    event.preventDefault();
    api
      .postComment(this.props.article_id, this.state.newComment)
      .then(newComment => {
        this.setState(currentState => {
          let updatedComments = [newComment, ...currentState.comments];

          return {
            ...currentState,
            comments: updatedComments,
            postedComment: true
          };
        });
      })
      .catch(console.dir);
  };

  handleChange = event => {
    this.setState({
      newComment: { body: event.target.value, username: 'jessjelly' }
    });
  };

  handleDelete = comment_id => {
    api.deleteComment(comment_id).then(
      this.setState(currentState => {
        let newCommentList = currentState.comments.filter(
          comment => comment.comment_id !== comment_id
        );
        return { ...currentState, comments: newCommentList };
      })
    );
  };

  handleCloseModal = () => {
    this.setState(currentState => {
      return { ...currentState, postedComment: false };
    });
  };

  render() {
    return (
      <>
        <h2>Comments</h2>
        {this.state.isLoading ? (
          <Loading />
        ) : (
          <>
            <Popup
              trigger={
                <Button>
                  {' '}
                  Add comment <FontAwesomeIcon icon={faComment} />
                </Button>
              }
              onClose={this.handleCloseModal}
              position='right center'
              modal
            >
              <>
                {this.state.postedComment ? (
                  <h2>Comment posted!</h2>
                ) : (
                  <>
                    <h3>Add comment</h3>
                    <form onSubmit={this.handleSubmit}>
                      <p>Username: jessjelly</p>
                      <p>
                        <textarea
                          type='text'
                          id='comment-body'
                          rows='10'
                          onChange={this.handleChange}
                          required
                        />
                      </p>
                      <Button
                        type='submit'
                        disabled={this.state.newComment.body ? false : true}
                        onClick={this.handleSubmit}
                      >
                        Post comment
                      </Button>
                    </form>
                  </>
                )}
              </>
            </Popup>

            {this.state.comments.map(comment => {
              return (
                <CommentCard
                  comment={comment}
                  key={comment.comment_id}
                  handleDelete={this.handleDelete}
                />
              );
            })}
          </>
        )}
      </>
    );
  }

  componentDidMount() {
    api
      .getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments, isLoading: false });
      })
      .catch(console.log);
  }
}

export default CommentsList;
