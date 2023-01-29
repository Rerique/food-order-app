import { useContext, useState } from 'react';
import CartContext from '../../context/cart-context';
import useHttp from '../../hooks/useHttp';
import Modal from '../UI/Modal';
import styles from './Cart.module.css';
import CartItem from './CartItem';
import Checkout from './Checkout';

export default function Cart({ onHideCart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const { items, totalAmount, addItem, removeItem } = useContext(CartContext);
  const { isLoading: isSubmitting, sendRequest } = useHttp();

  const fixedTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id) => {
    removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    addItem({ ...item, amount: 1 });
  };

  const orderHandler = () => {
    setIsCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    await sendRequest({
      url: 'https://react-http-request-pract-9cb0f-default-rtdb.asia-southeast1.firebasedatabase.app/orders.json',
      method: 'POST',
      body: { userData, orderedItems: items, totalAmount: fixedTotalAmount },
    });
    setDidSubmit(true);
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

  const modalActions = (
    <div className={styles.actions}>
      <button
        type='button'
        className={styles['button--alt']}
        onClick={onHideCart}>
        Close
      </button>
      {hasItems && (
        <button type='button' className={styles.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{fixedTotalAmount}</span>
      </div>
      {isCheckout && (
        <Checkout onCancel={onHideCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckout && modalActions}
    </>
  );

  const didSubmitModalContent = (
    <>
      <p>Successfully sending the order!</p>
      <div className={styles.actions}>
        <button
          type='button'
          className={styles['button--alt']}
          onClick={onHideCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal onHideCart={onHideCart}>
      {isSubmitting && !didSubmit && cartModalContent}
      {didSubmit && didSubmitModalContent}
    </Modal>
  );
}
