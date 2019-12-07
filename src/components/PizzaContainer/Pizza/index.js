import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import pizzaBase from '../../../assets/base.png';
import { toppingImageMap } from '../../../constants/pizza';
import * as styles from './index.module.css';

const Pizza = (props) => {
  const { toppings, className } = props;
  const toppingsToShow = Object.keys(toppings).filter((topping) => toppings[topping]);

  return (
    <div className={classnames(styles['pizza-container'], className)}>
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
  className: PropTypes.string,
};

Pizza.defaultProps = {
  toppings: {
    greenPepper: false,
    redPepper: false,
    olives: false,
    sausages: false,
    tomato: false,
    mushrooms: false,
  },
  className: '',
};

export default Pizza;
