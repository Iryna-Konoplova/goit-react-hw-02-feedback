// Модули
import React from 'react';

// Стили
import styles from './SectionTitle.module.css';

const SectionTitle = ({ children }) => (
  <div className={styles.section}>
    <h2 className={styles.title}>Pleas leave feedback</h2>
    {children}
  </div>
);

export default SectionTitle;
