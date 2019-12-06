import React from 'react';
import CheckoutSummary from '../CheckoutSummary';
import Receipt from '../Receipt';
import * as styles from './index.module.css';

const Checkout = () => (
  <div className={styles['checkout-container']}>
    <CheckoutSummary />
    <Receipt />
  </div>
);

export default Checkout;
