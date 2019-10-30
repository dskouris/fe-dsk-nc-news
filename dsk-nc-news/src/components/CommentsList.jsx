import React, { Component } from 'react';
import CommentCard from './CommentCard';
import * as api from '../utils/api';
import Popup from 'reactjs-popup';

class CommentsList extends Component {
  state = {
    newComment: {},
    postedComment: false,
    comments: []
  };

  handleSubmit = event => {
    event.preventDefault();
    api
      .postComment(this.props.article_id, this.state.newComment)
      .then(newComment =>
        this.setState(currentState => {
          let updatedComments = [newComment, ...currentState.comments];

          return {
            ...currentState,
            comments: updatedComments,
            postedComment: true
          };
        })
      )
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
        <Popup
          trigger={<button> Add comment</button>}
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
                    <label>
                      Comment:
                      <textarea
                        type='text'
                        id='comment-body'
                        onChange={this.handleChange}
                        required
                      />
                    </label>
                  </p>
                  <button type='submit' onClick={this.handleSubmit}>
                    Post comment
                  </button>
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
    );
  }

  componentDidMount() {
    api
      .getComments(this.props.article_id)
      .then(comments => {
        this.setState({ comments });
      })
      .catch(console.log);
  }
}

export default CommentsList;
