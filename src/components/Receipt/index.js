import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGlobalStore } from '../../redux/store';
import * as styles from './index.module.css';

class Receipt extends Component {
  render() {
    const { state: { pizzas } } = this.props;
    return (
      <div className={styles['checkout-receipt']}>
        <h3 className={styles['receipt-header']}>Pizza Invoice</h3>
        {pizzas.map((pizza, index) => (
          <div className={styles['receipt-pizza-row']}>
            <div>{`Pizza ${index + 1}`}</div>
            <div>₹ 350</div>
          </div>
        ))}
        <div className={styles['receipt-total-row']}>
          <div>Total</div>
          <div>{`₹ ${pizzas.length * 350}`}</div>
        </div>
      </div>
    );
  }
}

Receipt.propTypes = {
  state: PropTypes.object,
};

Receipt.defaultProps = {
  state: {},
};

export default withGlobalStore(Receipt);
