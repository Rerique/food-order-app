import styles from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button type='button'>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImg} alt='meals' />
      </div>
    </>
  );
}
