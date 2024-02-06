import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm3',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
];

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  // only runs when component was first loaded
  useEffect(() => {
    const fetchMeals = async () => {
      try {
        // const response = await fetch(
        //   'https://react-demo-86a1e-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
        // );
        // if (!response.ok) {
        //   throw new Error('Something went wrong!');
        // }
        
        const data = DUMMY_MEALS;
        const loadedMeals = [];
  
        for (const key in data) {
          loadedMeals.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
          });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setHttpError(error.message);
      }
    };

    fetchMeals();
  }, []);

  if (isLoading) {
    return (
      <section className={classes.meals_loading}>
        <p>Loading...</p>
      </section>
    );
  }

  if (httpError) {
    return (
      <section className={classes.meals_error}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = meals.map((meal) => (
    <MealItem id={meal.id} key={meal.id} meal={meal} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
