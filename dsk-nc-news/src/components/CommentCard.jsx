import React from 'react';
import * as utils from '../utils/utils';

const CommentCard = ({ comment: { author, body, created_at, votes } }) => {
  return (
    <div className='comment-card'>
      <h4>{author}</h4>
      <p>Created:{utils.formatTimestamp(created_at)}</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
