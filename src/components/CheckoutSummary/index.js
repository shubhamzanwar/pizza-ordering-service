import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPizzaSummary } from '../../utils/pizza';
import * as styles from './index.module.css';

const CheckoutSummary = ({ pizzas }) => (
  <div className={styles['checkout-summary-container']}>
    <h3 className={styles['toppings-pallette-header']}>Your Pizzas</h3>
    {pizzas.map((pizza) => (
      <div className={styles['checkout-pizza-summary']}>{getPizzaSummary(pizza)}</div>
    ))}
  </div>
);

CheckoutSummary.propTypes = {
  pizzas: PropTypes.arrayOf(
    PropTypes.shape({
      greenPepper: PropTypes.bool,
      redPepper: PropTypes.bool,
      olives: PropTypes.bool,
      sausages: PropTypes.bool,
      tomato: PropTypes.bool,
      mushrooms: PropTypes.bool,
    }),
  ),
};

CheckoutSummary.defaultProps = {
  pizzas: [],
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

export default connect(mapStateToProps)(CheckoutSummary);
