/* eslint-disable react/jsx-no-constructed-context-values */
import CartContext from './cart-context';

export default function CartProvider({ children }) {
  const addItemToCartHandler = () => {};

  const removeItemFromCartHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
