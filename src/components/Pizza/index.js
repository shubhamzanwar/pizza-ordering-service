import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  // eslint-disable-next-line react/no-unused-prop-types
  index: PropTypes.number.isRequired, // Used in mapStateToProps
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

const mapStateToProps = (state, ownProps) => ({
  toppings: state.pizzas[ownProps.index],
});

export default connect(mapStateToProps)(Pizza);
