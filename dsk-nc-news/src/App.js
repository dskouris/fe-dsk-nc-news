import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';
import SingleArticle from './components/SingleArticle';
import ErrorPage from './components/ErrorPage';
import { Router } from '@reach/router';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <Articles path='/' />
        <Articles path='/articles' />
        <Articles path='topics/:topic' />
        <SingleArticle path='/articles/:article_id' />
        <ErrorPage err={{ status: 404, msg: 'path not found' }} default />
      </Router>
    </div>
  );
}

export default App;
