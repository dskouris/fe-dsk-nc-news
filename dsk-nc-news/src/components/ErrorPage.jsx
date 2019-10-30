import React from 'react';

const ErrorPage = props => {
  return (
    <>
      <h1>Error</h1>
      <p>If you're seeing this, something has gone wrong</p>
      <p>
        {props.err.status}: {props.err.msg}
      </p>
    </>
  );
};

export default ErrorPage;
