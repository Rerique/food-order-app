import CartIcon from '../Cart/CartIcon';
import styles from './HeaderCartButton.module.css';

export default function HeaderCartButton({ onShowCart }) {
  return (
    <button type='button' className={styles.button} onClick={onShowCart}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>3</span>
    </button>
  );
}
