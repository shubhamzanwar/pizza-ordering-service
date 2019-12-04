import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { TOGGLE_TOPPING } from '../../../../redux/actions';
import { toppings } from '../../../../constants/pizza';
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

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTopping: () => dispatch({
    type: TOGGLE_TOPPING,
    payload: {
      index: ownProps.index,
      topping: toppings[ownProps.topping],
    },
  }),
});

export default connect(null, mapDispatchToProps)(Toppings);
