import React from 'react';

const CommentCard = ({ comment: { comment_id, body, created_at, votes } }) => {
  return (
    <div className='comment-card'>
      <h4>#{comment_id}</h4>
      <p>Created:{created_at}</p>
      <p>{body}</p>
      <p>Votes: {votes}</p>
    </div>
  );
};

export default CommentCard;
