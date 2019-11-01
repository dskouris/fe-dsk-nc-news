import React from 'react';

const ErrorPage = ({ err: { status, msg } }) => {
  return (
    <>
      <h1>Error</h1>
      <p>If you're seeing this, something has gone wrong</p>
      <p>
        {status}: {msg}
      </p>
    </>
  );
};

export default ErrorPage;
