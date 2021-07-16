// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {Object.keys(options).map(key => (
        <button className={styles.button} key={key} onClick={onLeaveFeedback}>
          {key}
        </button>
      ))}
      ;
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
