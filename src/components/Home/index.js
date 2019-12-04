import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import PizzaContainer from '../PizzaContainer';
import * as styles from './index.module.css';

const Home = ({ pizzas }) => (
  <div className={styles['home-container']}>
    {pizzas.map((pizza, index) => (<PizzaContainer toppings={pizza} index={index} />))}
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
};

Home.defaultProps = {
  pizzas: [],
};

const mapStateToProps = (state) => ({
  pizzas: state.pizzas,
});

export default connect(mapStateToProps)(Home);
