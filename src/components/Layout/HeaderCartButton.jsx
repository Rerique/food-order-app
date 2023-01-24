import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton({ onShowCart }) {
  const { items } = useContext(CartContext);

  const numberOfCartItems = items.reduce(
    (curNums, items) => curNums + items.amount,
    0,
  );

  return (
    <button type='button' className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}
