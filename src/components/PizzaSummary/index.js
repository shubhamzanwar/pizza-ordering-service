import React from 'react';
import PropTypes from 'prop-types';
import Pizza from '../PizzaContainer/Pizza';
import { getPizzaSummary } from '../../utils/pizza';
import * as styles from './index.module.css';

const PizzaSummary = ({ pizza, deletePizza }) => (
  <div className={styles['pizza-summary']}>
    <Pizza toppings={pizza} className={styles['summary-pizza-preview']} />
    <div className={styles['pizza-summary-toppings']}>{getPizzaSummary(pizza)}</div>
    <button type="button" className={styles['delete-button']} onClick={deletePizza}>
      <i className="material-icons">close</i>
    </button>
  </div>
);

PizzaSummary.propTypes = {
  pizza: PropTypes.shape({
    greenPepper: PropTypes.bool,
    redPepper: PropTypes.bool,
    olives: PropTypes.bool,
    sausages: PropTypes.bool,
    tomato: PropTypes.bool,
    mushrooms: PropTypes.bool,
  }),
  deletePizza: PropTypes.func.isRequired,
};

PizzaSummary.defaultProps = {
  pizza: [],
};

export default PizzaSummary;
