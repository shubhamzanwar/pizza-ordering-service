import React, { useContext } from 'react';
import { StoreContext } from '../../redux/store';
import PizzaSummary from './PizzaSummary';
import { DELETE_PIZZA } from '../../redux/actions';
import * as styles from './index.module.css';

const CheckoutSummary = () => {
  const { state, dispatch } = useContext(StoreContext);
  const { pizzas } = state;
  const deletePizza = (index) => dispatch({
    type: DELETE_PIZZA,
    payload: { index },
  });
  return (
    <div className={styles['checkout-summary-container']}>
      <h3 className={styles['toppings-pallette-header']}>Your Pizzas</h3>
      {pizzas.map((pizza, index) => (
        <PizzaSummary pizza={pizza} deletePizza={() => deletePizza(index)} />
      ))}
    </div>
  );
};

export default CheckoutSummary;
