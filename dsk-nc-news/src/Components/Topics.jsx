import React, { Component } from 'react';

class Topics extends Component {
  state = {
    topics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life'
      },
      {
        slug: 'football',
        description: 'FOOTIE!'
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?'
      }
    ]
  };

  render() {
    return (
      <div id='topics'>
        <h3>Topics</h3>
        <ul>
          {this.state.topics.map(topic => {
            return <li key={topic.slug}>{topic.slug}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default Topics;
