import { useRef, useState } from 'react';
import styles from './Checkout.module.css';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

function Checkout({ onCancel }) {
  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const nameIsValid = !isEmpty(enteredName);
    const streetIsValid = !isEmpty(enteredStreet);
    const cityIsValid = !isEmpty(enteredCity);
    const postalCodeIsValid = isFiveChars(enteredPostalCode);

    setFormInputValidity({
      name: nameIsValid,
      street: streetIsValid,
      city: cityIsValid,
      postalCode: postalCodeIsValid,
    });

    const formIsValid =
      nameIsValid && streetIsValid && cityIsValid && postalCodeIsValid;

    if (formIsValid) {
      console.log(enteredName);
    }
  };

  const nameControlClasses = !formInputValidity.name ? styles.invalid : '';
  const streetControlClasses = !formInputValidity.street ? styles.invalid : '';
  const cityControlClasses = !formInputValidity.city ? styles.invalid : '';
  const postalCodeControlClasses = !formInputValidity.postalCode
    ? styles.invalid
    : '';

  return (
    <form className={styles.form} onSubmit={confirmHandler}>
      <div className={`${styles.control} ${nameControlClasses}`}>
        <label htmlFor='name'>
          Your Name
          <input type='text' id='name' ref={nameInputRef} />
        </label>
        {!formInputValidity.name && <p>Please enter a valid name!</p>}
      </div>
      <div className={`${styles.control} ${streetControlClasses}`}>
        <label htmlFor='street'>
          Street
          <input type='text' id='street' ref={streetInputRef} />
        </label>
        {!formInputValidity.street && <p>Please enter a valid street!</p>}
      </div>
      <div className={`${styles.control} ${postalCodeControlClasses}`}>
        <label htmlFor='postal'>
          Postal Code
          <input type='text' id='postal' ref={postalCodeInputRef} />
        </label>
        {!formInputValidity.postalCode && (
          <p>Please enter a valid postal code!</p>
        )}
      </div>
      <div className={`${styles.control} ${cityControlClasses}`}>
        <label htmlFor='city'>
          City
          <input type='text' id='city' ref={cityInputRef} />
        </label>
        {!formInputValidity.city && <p>Please enter a valid city!</p>}
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
