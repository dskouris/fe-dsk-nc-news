import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
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
        <Users path='/users' />
        <ErrorPage default />
      </Router>
    </div>
  );
}

export default App;
