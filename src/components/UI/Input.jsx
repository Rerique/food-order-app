import React from 'react';
import styles from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={styles.input}>
      <label htmlFor={props.id}>
        {props.label}
        <input
          ref={ref}
          id={props.id}
          type={props.type}
          min={props.min}
          max={props.max}
          step={props.step}
          defaultValue={props.defaultValue}
        />
      </label>
    </div>
  );
});

export default Input;
