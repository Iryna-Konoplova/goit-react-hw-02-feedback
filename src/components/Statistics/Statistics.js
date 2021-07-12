// Модули
import React from 'react';
import PropTypes from 'prop-types';

// Компоненты
import Notification from '../Notification';

// Стили
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2 className={styles.title}>Statistics</h2>
    {total ? (
      <ul className={styles.list}>
        <p className={styles.statistics}>Good: {good}</p>
        <p className={styles.statistics}>Neutral: {neutral}</p>
        <p className={styles.statistics}>Bad: {bad}</p>
        <p className={styles.statistics}>Total: {total}</p>
        <p className={styles.statistics}>
          Positive feedback:{' '}
          {Number.isNaN(positivePercentage) ? 0 : positivePercentage}%
        </p>
      </ul>
    ) : (
      <Notification message={'No feedback given'} />
    )}
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
