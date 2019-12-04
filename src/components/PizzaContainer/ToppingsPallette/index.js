import React from 'react';
import PropTypes from 'prop-types';
import { toppings as toppingsList } from '../../../constants/pizza';
import Topping from './Topping';
import * as styles from './index.module.css';

const ToppingsPallette = ({ index, toppings }) => (
  <div className={styles['toppings-pallette']}>
    <h3 className={styles['toppings-pallette-header']}>Choose your toppings</h3>
    <div className={styles['toppings-container']}>
      {Object.keys(toppingsList).map((topping) => (
        <Topping
          topping={topping}
          index={index}
          active={toppings[toppingsList[topping]]}
          key={topping}
        />
      ))}
    </div>
  </div>
);

ToppingsPallette.propTypes = {
  toppings: PropTypes.shape({
    greenPepper: PropTypes.bool,
    redPepper: PropTypes.bool,
    olives: PropTypes.bool,
    sausages: PropTypes.bool,
    tomato: PropTypes.bool,
    mushrooms: PropTypes.bool,
  }),
  index: PropTypes.number,
};

ToppingsPallette.defaultProps = {
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

export default ToppingsPallette;
