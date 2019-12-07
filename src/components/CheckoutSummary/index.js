import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaSummary from './PizzaSummary';
import { DELETE_PIZZA } from '../../redux/actions';
import * as styles from './index.module.css';

const CheckoutSummary = ({ pizzas, deletePizza }) => (
  <div className={styles['checkout-summary-container']}>
    <h3 className={styles['toppings-pallette-header']}>Your Pizzas</h3>
    {pizzas.map((pizza, index) => (
      <PizzaSummary pizza={pizza} deletePizza={() => deletePizza(index)} />
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
  deletePizza: PropTypes.func.isRequired,
};

CheckoutSummary.defaultProps = {
  pizzas: [],
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

const mapDispatchToProps = (dispatch) => ({
  deletePizza: (index) => dispatch({
    type: DELETE_PIZZA,
    payload: { index },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutSummary);
