// Модули
import React from 'react';
// import PropTypes from 'prop-types';

const FeedbackOptions = () => (
  <div>
    <h2>Pleas leave feedback</h2>
    <ul>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
    </ul>
    <h2>Statistics</h2>
    <ul>
      <span>Good: 3</span>
      <span>Neutral: 2</span>
      <span>Bad: 2</span>
      <span>Total: 7</span>
      <span>Positive feedback: 43%</span>
    </ul>
  </div>
);

export default FeedbackOptions;
