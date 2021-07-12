// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Стили
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({
  onClickButtonGood,
  onClickButtonNeutral,
  onClickButtonBad,
}) => (
  <ul className={styles.list}>
    <button className={styles.button} type="button" onClick={onClickButtonGood}>
      Good
    </button>
    <button
      className={styles.button}
      type="button"
      onClick={onClickButtonNeutral}
    >
      Neutral
    </button>
    <button className={styles.button} type="button" onClick={onClickButtonBad}>
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
