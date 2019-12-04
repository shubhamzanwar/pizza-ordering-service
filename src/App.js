import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import * as styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <header className={styles['app-header']}>
        <Link className={styles['header-button']} to="/">Home</Link>
        <Link className={styles['header-button']} to="/checkout">Checkout</Link>
      </header>
      <div className={styles.content}>
        <Switch>
          <Route exact path="/" render={() => <div>home</div> }/>
          <Route path="/checkout" render={() => <div>Checkout</div> }/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
