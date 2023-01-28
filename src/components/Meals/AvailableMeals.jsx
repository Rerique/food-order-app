import { useCallback, useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const mealsRequest = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://react-http-request-pract-9cb0f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
      );
      const meals = await response.json();

      const mealsData = [];
      Object.entries(meals).forEach(([key, value]) => {
        mealsData.push({
          id: key,
          name: value.name,
          description: value.description,
          price: Number(value.price),
        });
      });

      setMeals(mealsData);
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    mealsRequest();
  }, [mealsRequest]);

  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  let content = '';
  if (error) {
    content = <p>{error}</p>;
  }
  if (isLoading) {
    content = <p>Loading ...</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        {isLoading && content}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
