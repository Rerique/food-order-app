import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './MealItemForm.module.css';

export default function MealItemForm({ id, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    onAddToCart(enteredAmountNum);
  };

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label='Amount :'
        id={`amount_${id}`}
        type='number'
        min='1'
        max='5'
        step='1'
        defaultValue='1'
      />
      <button type='submit'>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount 1-5</p>}
    </form>
  );
}
