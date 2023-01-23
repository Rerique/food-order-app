import styles from './Input.module.css';

export default function Input({ label, input }) {
  return (
    <div className={styles.input}>
      <label htmlFor={input.id}>
        {label}
        <input {...input} />
      </label>
    </div>
  );
}
