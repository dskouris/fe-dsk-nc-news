import React, { Component } from 'react';
import { Link } from '@reach/router';
import * as api from '../utils/api';

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div id='topics'>
        <h3>Topics</h3>
        <ul>
          <li>
            <Link to='/'>All</Link>
          </li>
          {this.state.topics.map(topic => {
            const capitalise = str => {
              let firstLetter = str[0].toUpperCase();
              return firstLetter + str.slice(1);
            };
            const topicName = capitalise(topic.slug);
            return (
              <li key={topic.slug}>
                <Link to={`/topics/${topic.slug}`} key={topic.slug}>
                  {topicName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({ topics });
    });
  }
}

export default Topics;
