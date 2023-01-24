import styles from './Input.module.css';

export default function Input({
  label,
  id,
  type,
  min,
  max,
  step,
  defaultValue,
}) {
  return (
    <div className={styles.input}>
      <label htmlFor={id}>
        {label}
        <input
          id={id}
          type={type}
          min={min}
          max={max}
          step={step}
          defaultValue={defaultValue}
        />
      </label>
    </div>
  );
}
