import styles from './AvailableMeals.module.css';
import DUMMY_MEALS from '../../data/meals-data';

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>{meal.name}</li>
  ));

  return (
    <section className={styles.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
}
