// components/Spinner.js
import React from 'react';
import styles from './Spinner.module.css';



const Spinner = () => {
  return (
    <div class={styles.preload}>
    <div class={styles.wrap}>
        <div class={styles.loading}>
            <div class={styles.bounceball}></div>
            <div class={styles.text}>NOW LOADING</div>
        </div>
    </div>
    </div>
  );
};

export default Spinner;
