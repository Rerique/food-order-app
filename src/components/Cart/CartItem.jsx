import classes from './CartItem.module.css';

function CartItem({ item, onAdd, onRemove }) {
  const price = `$${item.price.toFixed(2)}`;

  const onItemAdd = () => {
    onAdd(item);
  };

  const onItemRemove = () => {
    onRemove(item.id);
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>x {item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={onItemRemove}>
          -
        </button>
        <button type='button' onClick={onItemAdd}>
          +
        </button>
      </div>
    </li>
  );
}

export default CartItem;
