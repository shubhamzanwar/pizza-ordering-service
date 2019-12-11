import React, { useContext } from 'react';
import { StoreContext } from '../../redux/store';
import PizzaContainer from '../PizzaContainer';
import { ADD_NEW_PIZZA } from '../../redux/actions';
import * as styles from './index.module.css';

const Home = () => {
  const { state, dispatch } = useContext(StoreContext);
  console.log(state);
  const { pizzas } = state;
  const addNewPizza = () => dispatch({ type: ADD_NEW_PIZZA });
  return (
    <div className={styles['home-container']}>
      {pizzas.map((pizza, index) => (<PizzaContainer toppings={pizza} index={index} />))}
      <button type="button" className={styles['add-button']} onClick={addNewPizza}>Add another Pizza</button>
    </div>
  );
};


export default Home;
