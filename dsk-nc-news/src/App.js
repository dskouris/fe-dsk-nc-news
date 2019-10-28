import React from 'react';
import Header from './Components/Header';
import Users from './Components/Users';
import ArticlesList from './Components/ArticlesList';
import { Router } from '@reach/router';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Router>
        <ArticlesList path='/' />
        <Users path='/users' />
      </Router>
    </div>
  );
}

export default App;
