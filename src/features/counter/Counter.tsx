import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Counter.module.css';
import { selectCount, useCounter } from './counterSlice';

export function Counter() {
  const count = useSelector(selectCount);
  const {
    increment,
    decrement,
    incrementByAmount,
    incrementAsync,
  } = useCounter();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={increment}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={decrement}
        >
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => incrementByAmount(Number(incrementAmount) || 0)}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => incrementAsync(Number(incrementAmount) || 0)}
        >
          Add Async
        </button>
      </div>
    </div>
  );
}
