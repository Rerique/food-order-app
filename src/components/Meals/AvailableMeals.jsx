import { useEffect, useState } from 'react';
import styles from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import useHttp from '../../hooks/useHttp';

export default function AvailableMeals() {
  const [meals, setMeals] = useState([]);
  const { isLoading, error, sendRequest: fetchMeals } = useHttp();

  useEffect(() => {
    const transformData = (data) => {
      const mealsData = [];
      Object.entries(data).forEach(([key, value]) => {
        mealsData.push({
          id: key,
          name: value.name,
          description: value.description,
          price: Number(value.price),
        });
      });
      setMeals(mealsData);
    };

    fetchMeals(
      {
        url: 'https://react-http-request-pract-9cb0f-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
      },
      transformData,
    );
  }, [fetchMeals]);

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
    content = <p className={styles.mealsState}>{error}</p>;
  }
  if (isLoading) {
    content = <p className={styles.mealsState}>Loading ...</p>;
  }

  return (
    <section className={styles.meals}>
      <Card>
        {content}
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
