import { useContext } from 'react';
import CartContext from '../../context/cart-context';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';

export default function Cart({ onHideCart }) {
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);

  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {items.map((item) => (
        <CartItem
          item={item}
          key={item.id}
          onAdd={cartItemAddHandler}
          onRemove={cartItemRemoveHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{fixedTotalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles['button--alt']}
          onClick={onHideCart}>
          Close
        </button>
        {hasItems && (
          <button type='button' className={styles.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
}
