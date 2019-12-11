import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StoreContext } from '../../../../redux/store';
import { TOGGLE_TOPPING } from '../../../../redux/actions';
import { toppings } from '../../../../constants/pizza';
import * as styles from './index.module.css';

const Toppings = ({ topping, active, index }) => {
  const { dispatch } = useContext(StoreContext);
  const toggleTopping = () => dispatch({
    type: TOGGLE_TOPPING,
    payload: {
      index,
      topping: toppings[topping],
    },
  });
  return (
    <button
      className={classnames({ [styles.topping]: true, [styles.active]: active })}
      type="button"
      onClick={toggleTopping}
    >
      {topping}
    </button>
  );
};

Toppings.propTypes = {
  topping: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  active: PropTypes.bool,
};

Toppings.defaultProps = {
  active: false,
};

export default Toppings;
