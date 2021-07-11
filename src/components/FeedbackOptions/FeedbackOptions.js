// Модули
import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({
  onClickButtonGood,
  onClickButtonNeutral,
  onClickButtonBad,
}) => (
  <ul>
    <button type="button" onClick={onClickButtonGood}>
      Good
    </button>
    <button type="button" onClick={onClickButtonNeutral}>
      Neutral
    </button>
    <button type="button" onClick={onClickButtonBad}>
      Bad
    </button>
  </ul>
);

FeedbackOptions.propTypes = {
  onClickButtonGood: PropTypes.func.isRequired,
  onClickButtonNeutral: PropTypes.func.isRequired,
  onClickButtonBad: PropTypes.func.isRequired,
};

export default FeedbackOptions;
