import React from 'react';
import * as utils from '../utils/utils';
import Voter from './Voter';
import styled from 'styled-components';

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
        <>
          <br />
          <Button
            onClick={() => {
              handleDelete(comment_id);
            }}
          >
            Delete my comment
          </Button>
        </>
      )}
    </div>
  );
};

export default CommentCard;
