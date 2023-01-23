import styles from './MealItem.module.css';
import MealItemForm from './MealItemForm';

export default function MealItem({ id, name, description, price }) {
  return (
    <li className={styles.meal}>
      <div>
        <h3>{name}</h3>
        <div className={styles.description}>{description}</div>
        <div className={styles.price}>{`$${price.toFixed(2)}`}</div>
      </div>
      <MealItemForm id={id} />
    </li>
  );
}
