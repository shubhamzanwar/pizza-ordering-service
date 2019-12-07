import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaContainer from '../PizzaContainer';
import { ADD_NEW_PIZZA } from '../../redux/actions';
import * as styles from './index.module.css';

const Home = ({ pizzas, addNewPizza }) => (
  <div className={styles['home-container']}>
    {pizzas.map((pizza, index) => (<PizzaContainer toppings={pizza} index={index} />))}
    <button type="button" className={styles['add-button']} onClick={addNewPizza}>Add another Pizza</button>
  </div>
);

Home.propTypes = {
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
  addNewPizza: PropTypes.func.isRequired,
};

Home.defaultProps = {
  pizzas: [],
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

const mapDispatchToProps = (dispatch) => ({
  addNewPizza: () => dispatch({ type: ADD_NEW_PIZZA }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
