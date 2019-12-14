import React from 'react';
import PropTypes from 'prop-types';
import Pizza from './Pizza';
import ToppingsPallette from './ToppingsPallette';
import * as styles from './index.module.css';

const PizzaContainer = ({ toppings, index, toggleTopping }) => (
  <div className={styles['pizza-container']}>
    <Pizza toppings={toppings} />
    <ToppingsPallette toppings={toppings} index={index} toggleTopping={toggleTopping} />
  </div>
);

PizzaContainer.propTypes = {
  toppings: PropTypes.shape({
    greenPepper: PropTypes.bool,
    redPepper: PropTypes.bool,
    olives: PropTypes.bool,
    sausages: PropTypes.bool,
    tomato: PropTypes.bool,
    mushrooms: PropTypes.bool,
  }),
  index: PropTypes.number,
  toggleTopping: PropTypes.func.isRequired,
};

PizzaContainer.defaultProps = {
  toppings: {
    greenPepper: false,
    redPepper: false,
    olives: false,
    sausages: false,
    tomato: false,
    mushrooms: false,
  },
  index: 0,
};

export default PizzaContainer;
