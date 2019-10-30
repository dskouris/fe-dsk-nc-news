import React from 'react';
import * as utils from '../utils/utils';

const CommentCard = ({
  comment: { comment_id, author, body, created_at, votes },
  handleDelete
}) => {
  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>Created:{utils.formatTimestamp(created_at)}</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
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
