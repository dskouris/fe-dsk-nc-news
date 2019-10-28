import React from 'react';
import Header from './components/Header';
import Users from './components/Users';
import ArticlesList from './components/ArticlesList';
import SingleArticle from './components/SingleArticle';
import { Router } from '@reach/router';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <ArticlesList path='/articles' />
        <SingleArticle path='/articles/:article_id' />
        <Users path='/users' />
      </Router>
    </div>
  );
}

export default App;
