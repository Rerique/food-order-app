import styles from './Checkout.module.css';

function Checkout({ onCancel }) {
  const confirmHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={styles.control}>
        <label htmlFor='name'>
          Your Name
          <input type='text' id='name' />
        </label>
      </div>
      <div className={styles.control}>
        <label htmlFor='street'>
          Street
          <input type='text' id='street' />
        </label>
      </div>
      <div className={styles.control}>
        <label htmlFor='postal'>
          Postal Code
          <input type='text' id='postal' />
        </label>
      </div>
      <div className={styles.control}>
        <label htmlFor='city'>
          City
          <input type='text' id='city' />
        </label>
      </div>
      <div className={styles.actions}>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button type='submit' className={styles.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
}

export default Checkout;
