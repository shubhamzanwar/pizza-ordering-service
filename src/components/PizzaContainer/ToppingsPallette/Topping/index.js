import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import * as styles from './index.module.css';

const Toppings = ({ topping, toggleTopping, active }) => (
  <button
    className={classnames({ [styles.topping]: true, [styles.active]: active })}
    type="button"
    onClick={toggleTopping}
  >
    {topping}
  </button>
);

Toppings.propTypes = {
  topping: PropTypes.string.isRequired,
  toggleTopping: PropTypes.func.isRequired,
  active: PropTypes.bool,
};

Toppings.defaultProps = {
  active: false,
};

export default Toppings;
