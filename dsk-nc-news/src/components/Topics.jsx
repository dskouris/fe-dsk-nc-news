import React, { Component } from 'react';
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
          <li>All</li>
          {this.state.topics.map(topic => {
            return <li key={topic.slug}>{topic.slug}</li>;
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
