import Modal from '../UI/Modal';
import styles from './Cart.module.css';

export default function Cart({ onHideCart }) {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: '2', price: '12.99' }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        ),
      )}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles['button--alt']}
          onClick={onHideCart}>
          Close
        </button>
        <button type='button' className={styles.button}>
          Order
        </button>
      </div>
    </Modal>
  );
}
