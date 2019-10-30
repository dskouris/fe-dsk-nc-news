import React from 'react';
import * as utils from '../utils/utils';
import Voter from './Voter';

const CommentCard = ({
  comment: { comment_id, author, body, created_at, votes },
  handleDelete
}) => {
  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>Created:{utils.formatTimestamp(created_at)}</p>
      <p>{body}</p>
      <Voter comment_id={comment_id} currentVotes={votes} />
      {author === 'jessjelly' && (
        <button
          onClick={() => {
            handleDelete(comment_id);
          }}
        >
          Delete my comment
        </button>
      )}
    </div>
  );
};

export default CommentCard;
