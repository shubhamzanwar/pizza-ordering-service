import React from 'react';
import PropTypes from 'prop-types';
import pizzaBase from '../../assets/base.png';
import { toppingImageMap } from '../../constants/pizza';
import * as styles from './index.module.css';

const Pizza = (props) => {
  const { toppings } = props;
  const toppingsToShow = Object.keys(toppings).filter((topping) => toppings[topping]);

  return (
    <div className={styles['pizza-container']}>
      <img src={pizzaBase} alt="pizza-base" className={styles['pizza-base']} />
      {toppingsToShow.map((topping) => (
        <img src={toppingImageMap[topping]} alt={topping} key={topping} className={styles['pizza-toppings']} />
      ))}
    </div>
  );
};

Pizza.propTypes = {
  toppings: PropTypes.shape({
    greenPepper: PropTypes.bool,
    redPepper: PropTypes.bool,
    olives: PropTypes.bool,
    sausages: PropTypes.bool,
    tomato: PropTypes.bool,
    mushrooms: PropTypes.bool,
  }),
};

Pizza.defaultProps = {
  toppings: {
    greenPepper: true,
    redPepper: true,
    olives: true,
    sausages: true,
    tomato: true,
    mushrooms: true,
  },
};

export default Pizza;
