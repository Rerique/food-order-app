import { useContext, useEffect, useState } from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton({ onShowCart }) {
  const [btnHighlighted, setBtnHighlighted] = useState(false);
  const { items } = useContext(CartContext);

  useEffect(() => {
    if (items.length > 0) {
      setBtnHighlighted(true);
    }

    const timer = setTimeout(() => {
      setBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const numberOfCartItems = items.reduce((curNums, items) => {
    return curNums + items.amount;
  }, 0);

  const btnStyles = `${styles.button} ${btnHighlighted ? styles.bump : ''}`;

  return (
    <button type='button' className={btnStyles} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
