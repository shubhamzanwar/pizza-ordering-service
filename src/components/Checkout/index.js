import React from 'react';
import CheckoutSummary from '../CheckoutSummary';
import * as styles from './index.module.css';

const Checkout = () => (
  <div className={styles['checkout-container']}>
    <CheckoutSummary />
  </div>
);

export default Checkout;
